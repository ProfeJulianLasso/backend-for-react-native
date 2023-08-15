import { IUserRepository } from '@domain';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPg } from '../entities';

@Injectable()
export class UserPgRepository<Entity extends UserPg>
  implements IUserRepository<Entity>
{
  constructor(
    @InjectRepository(UserPg) private readonly repository: Repository<Entity>,
  ) {}
  register(user: Entity): Promise<Entity> {
    return this.repository.save(user);
  }
}
