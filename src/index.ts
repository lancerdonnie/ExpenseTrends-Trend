import makeApp from './app';
import { setupDi } from './loaders/di';

const container = setupDi();
const app = makeApp({ container });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log('\x1b[36m%s\x1b[0m', `Running server on port ${PORT}`)
);
