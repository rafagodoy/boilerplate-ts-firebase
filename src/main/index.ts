import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import setupRoutes from './config/routes';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

setupRoutes(app);

app.listen(3000, () => {
  console.log('Rocket launch on 3000 port');
});

export default app;