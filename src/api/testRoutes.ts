import { Application, Router } from "express";
import testController from "../controllers/testController";
import ApiRoutes from "./api.routes";

export class TestRoute extends ApiRoutes{

    public router: Router | undefined;
    constructor(app: Application) {
      super(app, 'TestRoutes');
    }
  
    getName() {
      return this.name;
    }

    configureRoutes(): Application {
       
    
        return this.app.use(`/tests`, this.getRouter());
      }
    getRouter(): Router {
        this.router = Router({ mergeParams: true });
        this.router
      .route(`/`)
      .get(testController.getTests)
        return this.router;
    }

}