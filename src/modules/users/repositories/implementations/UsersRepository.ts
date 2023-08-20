import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];
  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }
    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();
    Object.assign(user, {
      name,
      email,
      admin: false,
      createdAt: new Date(),
    });
    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((item) => item.id === id);
    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((item) => item.email === email);
    return user;
  }

  turnAdmin(receivedUser: User): User {
    this.users.map((item) => {
      if (item.id === receivedUser.id) {
        // eslint-disable-next-line no-param-reassign
        item.admin = true;
      }
      return item;
    });
    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
