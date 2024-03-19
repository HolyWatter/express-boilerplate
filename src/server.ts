import App from "./app";
import AppController from "./app.controller";

const app = new App([new AppController()]);

app.listen();
