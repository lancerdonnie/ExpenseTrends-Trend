import type { ICradle } from '../types';
import { createContainer, asClass, asFunction, asValue } from 'awilix';
import Repo from '../repo';
import Trend from '../service/trend';
import TrendController from '../controller';
import query from './createConn';

export const setupDi = () => {
  const container = createContainer<ICradle>();

  container.register({
    repo: asClass(Repo).scoped(),
    query: asValue(query),
    core: asClass(Trend).scoped(),
    TrendController: asFunction(TrendController),
  });

  return container;
};
