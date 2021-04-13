import type { Express } from 'express';
import type { IContainer } from '../types';
import expressLoader from './express';

export default async ({
  app,
  container,
}: {
  app: Express;
  container: IContainer;
}) => {
  expressLoader({ app, container });
  return app;
};
