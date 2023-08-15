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

  constructor(user: Partial<TUser>) {
    this.id = user.id ?? '';
    this.name = user.name ?? '';
    this.status = user.status ?? EStatus.ACTIVE;
    this.username = user.username ?? '';
    this.password = user.password ?? '';
    this.email = user.email ?? '';
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
