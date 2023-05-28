import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import farmsRouter from '../routers/farms-router';
import { defaultErrorReturn } from '../middlewares/default-error-return';

export default class Server {
  app: Express;
  farmsPath: string;
  animalsPath: string;

  constructor() {
    this.app = express();
    this.farmsPath = '/farms';
    this.animalsPath = '/animals';

    //Middlewares exec
    this.middlewares();
    //Routes exec
    this.routes();

    //Default error handler
    this.errorHandler();
    
    //Listen exec
    this.listen();
  }

  //Middlewares
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan('dev'));
  }

  //Routes
  routes() {
    this.app.use(this.farmsPath, farmsRouter);
  }

  //Error Handler
  errorHandler() {
    this.app.use(defaultErrorReturn);
  }

  //Listen
  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  }
}
