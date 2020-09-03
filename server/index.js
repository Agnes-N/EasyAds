import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import route from './routes/index';
import db from './sequelize/models';
import logger from './config/winston';
import statusLogger from './helpers/loggerHelper';

dotenv.config();

const app = express();
app.use(bodyParser.json());
const { sequelize } = db;
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
const basePath = '/api/v1';

sequelize.sync().then(() => {
  app.listen(port, () => {
    logger.info(`Database succesfully connected and server listening on port ${port}`);
  });
});

app.use(basePath, statusLogger(route));

app.get('**', (req, res) => {
  res.status(200).send({
    status: 200,
    message: 'You are Welcome to Easy Ads.',
  });
});

export default app;
