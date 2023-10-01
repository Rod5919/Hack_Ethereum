import express from 'express';
import { Router } from 'express-serve-static-core';

import usersRouter from './user.routes';
import hospitalRouter from './hospital.routes';
import authRouter from './auth.routes';

function routerApi(app: { use: (arg0: string, arg1: Router) => void; }) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/hospitals', hospitalRouter);
  router.use('/auth', authRouter);
}

export default routerApi;
