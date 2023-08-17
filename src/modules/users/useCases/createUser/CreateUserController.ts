import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(req: Request, res: Response): Response {
    const { name, email } = req.body;
    this.createUserUseCase.execute({ name, email });
    return res.status(201).json({ message: "Usuário criado com sucesso" });
  }
}

export { CreateUserController };
