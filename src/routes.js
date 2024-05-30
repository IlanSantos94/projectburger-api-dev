import { Router } from 'express';
import { v4 } from 'uuid';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (request, response) => {
  const user = await User.create({
    id: v4(),
    name: 'Ilan',
    email:'gustavoisaque924@gmail.com',
    password_hash: 'olkn56hhv56b',
  });

  return response.status(201).json(user);

});

export default routes;