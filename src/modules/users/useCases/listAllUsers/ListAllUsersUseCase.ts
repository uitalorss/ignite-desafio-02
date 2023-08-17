import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

/* interface IRequest {
  user_id: string;
} */

class ListAllUsersUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute(): User[] {
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
