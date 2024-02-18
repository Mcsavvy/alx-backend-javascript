import express from 'express';
import Routes from './routes';

const app = express();
const port = 1245;

Routes(app);
app.listen(port, () => {
  console.log(`Example server listening on port ${port}`);
});

export default app;
module.exports = app;
