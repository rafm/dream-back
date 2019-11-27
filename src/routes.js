import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';
import SessionController from './app/controllers/SessionController';
import CourseController from './app/controllers/CourseController';
import OpportunityController from './app/controllers/OpportunityController';
import TechnologyController from './app/controllers/TechnologyController';

const routes = new Router();
routes.post('/sessions', SessionController.store);

routes.get('/courses', CourseController.index);
routes.get('/courses/:id', CourseController.find);
routes.post('/courses', CourseController.store);
routes.put('/courses/:id', CourseController.update);
routes.delete('/courses/:id', CourseController.delete);

routes.get('/opportunities', OpportunityController.index);
routes.get('/opportunities/:id', OpportunityController.find);
routes.post('/opportunities', OpportunityController.store);
routes.put('/opportunities/:id', OpportunityController.update);
routes.delete('/opportunities/:id', OpportunityController.delete);

routes.get('/technologies', TechnologyController.index);
routes.get('/technologies/:id', TechnologyController.find);
routes.post('/technologies', TechnologyController.store);
routes.put('/technologies/:id', TechnologyController.update);
routes.delete('/technologies/:id', TechnologyController.delete);

routes.use(authMiddleware);

export default routes;
