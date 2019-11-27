import * as Yup from 'yup';
import Technology from '../models/Technology';

class TechnologyController {
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

        const technologies = await Technology.findAll({
            where: { canceled_at: null },
            offset: (page - 1) * 20,
            limit: 20,
        });

        return response.json(technologies);
    }

    async find(request, response) {
        const technology = await Technology.findByPk(request.params.id);

        if (!technology) {
            return response
                .status(404)
                .json({ error: 'Technology does not exist' });
        }

        return response.json(technology);
    }

    async store(request, response) {
        const schema = Yup.object()
            .noUnknown() // TODO does not work
            .shape({
                name: Yup.string()
                    .required()
                    .min(3),
            });

        if (!schema.isValidSync(request.body)) {
            return response.status(400).json({ error: 'Validation fails' });
        }

        const createTechnologyRequest = schema.cast(request.body);

        const technology = await Technology.create(createTechnologyRequest);

        return response.json(technology);
    }

    async update(request, response) {
        const schema = Yup.object()
            .noUnknown() // TODO does not work
            .shape({
                name: Yup.string()
                    .required()
                    .min(3),
            });

        if (!schema.isValidSync(request.body)) {
            return response.status(400).json({ error: 'Validation fails' });
        }

        const technology = await Technology.findByPk(request.params.id);

        if (!technology) {
            return response
                .status(404)
                .json({ error: 'Technology does not exist' });
        }

        const updatedTechnology = await technology.update(request.body);

        return response.json(updatedTechnology);
    }

    async delete(request, response) {
        const technology = await Technology.findByPk(request.params.id);

        if (!technology) {
            return response
                .status(404)
                .json({ error: 'Technology does not exist' });
        }

        if (!technology.canceled_at) {
            technology.canceled_at = new Date();
            await technology.save();
        }

        return response.json(technology);
    }
}

export default new TechnologyController();
