import * as crypto from 'node:crypto';
import { v4 as uuidv4 } from 'uuid';
import { EStatus } from '../enums';
import { TUser } from './types';

export class User implements TUser {
  id: string;
  name: string;
  status: EStatus;
  username: string;
  password: string;
  email: string;

  constructor(user?: Partial<TUser>) {
    if (user?.id) this.id = user.id;
    if (user?.name) this.name = user.name;
    if (user?.status) this.status = user.status;
    if (user?.username) this.username = user.username;
    if (user?.password) this.password = user.password;
    if (user?.email) this.email = user.email;
  }

  create(): this {
    this.id = uuidv4();
    this.status = EStatus.ACTIVE;
    this.encryptPassword();
    return this;
  }

  private encryptPassword(): void {
    this.password = crypto
      .createHash('sha256')
      .update(this.password)
      .digest('hex');
  }
}
