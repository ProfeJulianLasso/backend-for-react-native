import { EStatus } from '../../enums';

export type TUser = {
  id: string;
  name: string;
  status: EStatus;
  username: string;
  password: string;
  email: string;
};
