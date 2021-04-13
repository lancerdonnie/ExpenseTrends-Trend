import type { ICradle } from '../types';

export default class Trend {
  constructor(opts: ICradle) {
    this.repo = opts.repo;
  }
  repo;

  getUserExpenseTrends = async () => {
    const userTrends = this.repo.getUserExpenseTrends();
    return userTrends;
  };

  getUsers = async () => {
    const users = this.repo.getUsers();
    return users;
  };

  getTrend = async (id: number) => {
    const trend = this.repo.getTrend(id);
    return trend;
  };
}
