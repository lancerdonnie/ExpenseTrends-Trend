import type { Response, Request } from 'express';
import type { ICradle } from '../types';
import { Router } from 'express';

const router = Router();

export default ({ core }: ICradle) => {
  router.get('/', async (_req: Request, res: Response) => {
    res.send(await core.getUserExpenseTrends());
  });

  router.get('/users', async (_req: Request, res: Response) => {
    res.send(await core.getUsers());
  });

  router.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await core.getTrend(id));
  });

  return router;
};
