import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import setupRoutes from './config/routes';

const app = express();

setupRoutes(app);

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log('Example app listening on port 3000');
});

export default app;