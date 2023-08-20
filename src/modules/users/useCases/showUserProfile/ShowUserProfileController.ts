import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(req: Request, res: Response): Response {
    const { user_id } = req.params;
    return res.status(200).json(this.showUserProfileUseCase.execute({ user_id }));
  }
}

export { ShowUserProfileController };
