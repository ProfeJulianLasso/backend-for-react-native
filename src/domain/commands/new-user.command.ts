import { EStatus } from '../enums';

export abstract class NewUserCommand {
  name: string;
  status: EStatus;
  username: string;
  password: string;
  email: string;
}
