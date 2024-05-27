import { Router } from 'express';

const routes = new Router();

routes.get('/', (request, response) =>
  response.status(200).json({ mensage: 'Show' }),
);

export default routes;