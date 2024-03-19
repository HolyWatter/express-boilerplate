import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";

import Controller from "./interface/controller.interface";

class App {
  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  public listen() {
    this.app.listen(8000, () => {
      console.log("This App is Running on http://localhost:8000");
    });
  }

  private initializeMiddlewares() {
    this.app.use(
      cors({
        origin: true,
        credentials: true,
      })
    );
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => this.app.use("/", controller.router));
  }
}

export default App;
