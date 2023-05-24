import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';

export default class Server {
  app: Express;
  constructor() {
    this.app = express();

    //Middlewares exec
    this.middlewares();
    //Routes exec

    //Listen exec
    this.listen();
  }

  //Middlewares
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan('dev'));
  }

  //Listen
  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  }
}
