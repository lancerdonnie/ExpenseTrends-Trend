import type { IContainer } from './types';
import express from 'express';
import loadApp from './loaders';
import { config } from 'dotenv';
config();

const makeApp = ({ container }: { container: IContainer }) => {
  const app = express();
  (async () => {
    await loadApp({ app, container });
  })();
  return app;
};

export default makeApp;
