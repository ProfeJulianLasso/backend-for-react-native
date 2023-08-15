import { Injectable } from '@nestjs/common';
import { UserPgRepository } from '../databases';
import { User } from '../entities';

@Injectable()
export class UserRepository extends UserPgRepository<User> {}
