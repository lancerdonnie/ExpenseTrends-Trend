import type { Express } from 'express';
import type { IContainer } from '../types';
import { json } from 'express';
import cors from 'cors';

export default async ({
  app,
  container,
}: {
  app: Express;
  container: IContainer;
}) => {
  app.use(json());
  app.use(cors());
  app.use(container.cradle.TrendController);
};
