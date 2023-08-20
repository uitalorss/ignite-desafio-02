import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(req: Request, res: Response): Response {
    return res.status(200).json(this.listAllUsersUseCase.execute());
  }
}

export { ListAllUsersController };
