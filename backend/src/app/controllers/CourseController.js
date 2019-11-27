import * as Yup from 'yup';
import Course from '../models/Course';

class CourseController {
    async index(request, response) {
        const schema = Yup.object().shape({
            page: Yup.number()
                .integer()
                .min(1)
                .default(1),
        });

        if (!schema.isValidSync(request.query)) {
            return response.status(400).json({ error: 'Validation fails' });
        }

        const { page } = schema.cast(request.query);

        const courses = await Course.findAll({
            where: { canceled_at: null },
            offset: (page - 1) * 20,
            limit: 20,
        });

        return response.json(courses);
    }

    async find(request, response) {
        const course = await Course.findByPk(request.params.id);

        if (!course) {
            return response
                .status(404)
                .json({ error: 'Course does not exist' });
        }

        return response.json(course);
    }

    async store(request, response) {
        const schema = Yup.object()
            .noUnknown() // TODO does not work
            .shape({
                name: Yup.string()
                    .required()
                    .min(3),
                duration: Yup.number()
                    .integer()
                    .required()
                    .min(1),
                // technologies: Yup.array()
                //     .min(1)
                //     .of(
                //         // TODO validate: at least one value / not empty
                //         Yup.object().shape({
                //             id: Yup.number().integer(),
                //             name: Yup.string().min(3),
                //         })
                //     ),
            });

        if (!schema.isValidSync(request.body)) {
            return response.status(400).json({ error: 'Validation fails' });
        }

        const createCourseRequest = schema.cast(request.body);

        const course = await Course.create(createCourseRequest);

        return response.json(course);
    }

    async update(request, response) {
        // TODO validate: at least one value / not empty
        const schema = Yup.object()
            .noUnknown() // TODO does not work
            .shape({
                name: Yup.string().min(3),
                duration: Yup.number()
                    .integer()
                    .min(1),
            });

        if (!schema.isValidSync(request.body)) {
            return response.status(400).json({ error: 'Validation fails' });
        }

        const course = await Course.findByPk(request.params.id);

        if (!course) {
            return response
                .status(404)
                .json({ error: 'Course does not exist' });
        }

        const updatedCourse = await course.update(request.body);

        return response.json(updatedCourse);
    }

    async delete(request, response) {
        const course = await Course.findByPk(request.params.id);

        if (!course) {
            return response
                .status(404)
                .json({ error: 'Course does not exist' });
        }

        if (!course.canceled_at) {
            course.canceled_at = new Date();
            await course.save();
        }

        return response.json(course);
    }
}

export default new CourseController();
