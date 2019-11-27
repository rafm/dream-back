import * as Yup from 'yup';
import Opportunity from '../models/Opportunity';

class OpportunityController {
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

        const opportunities = await Opportunity.findAll({
            where: { canceled_at: null },
            offset: (page - 1) * 20,
            limit: 20,
        });

        return response.json(opportunities);
    }

    async find(request, response) {
        const opportunity = await Opportunity.findByPk(request.params.id);

        if (!opportunity) {
            return response
                .status(404)
                .json({ error: 'Opportunity does not exist' });
        }

        return response.json(opportunity);
    }

    async store(request, response) {
        const schema = Yup.object()
            .noUnknown() // TODO does not work
            .shape({
                title: Yup.string()
                    .required()
                    .min(3),
                description: Yup.string()
                    .required()
                    .min(3),
                estimated_duration: Yup.number()
                    .integer()
                    .required()
                    .min(1),
                company_name: Yup.string()
                    .required()
                    .min(3),
                remuneration: Yup.number()
                    .integer()
                    .required()
                    .min(1),
            });

        if (!schema.isValidSync(request.body)) {
            return response.status(400).json({ error: 'Validation fails' });
        }

        const createOpportunityRequest = schema.cast(request.body);

        const opportunity = await Opportunity.create(createOpportunityRequest);

        return response.json(opportunity);
    }

    async update(request, response) {
        // TODO validate: at least one value / not empty
        const schema = Yup.object()
            .noUnknown() // TODO does not work
            .shape({
                title: Yup.string().min(3),
                description: Yup.string().min(3),
                estimated_duration: Yup.number()
                    .integer()
                    .min(1),
                company_name: Yup.string().min(3),
                remuneration: Yup.number()
                    .integer()
                    .min(1),
            });

        if (!schema.isValidSync(request.body)) {
            return response.status(400).json({ error: 'Validation fails' });
        }

        const opportunity = await Opportunity.findByPk(request.params.id);

        if (!opportunity) {
            return response
                .status(404)
                .json({ error: 'Opportunity does not exist' });
        }

        const updatedOpportunity = await opportunity.update(request.body);

        return response.json(updatedOpportunity);
    }

    async delete(request, response) {
        const opportunity = await Opportunity.findByPk(request.params.id);

        if (!opportunity) {
            return response
                .status(404)
                .json({ error: 'Opportunity does not exist' });
        }

        if (!opportunity.canceled_at) {
            opportunity.canceled_at = new Date();
            await opportunity.save();
        }

        return response.json(opportunity);
    }
}

export default new OpportunityController();
