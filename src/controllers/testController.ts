import { Request, Response, NextFunction, Application, Router } from 'express';
export class TestController{

async getTests(req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {

    res.status(200).json("Hello World");
}
}
export default new TestController();