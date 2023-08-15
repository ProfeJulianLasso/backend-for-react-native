import { EStatus, User } from '@domain';
import { Column, Entity } from 'typeorm';

@Entity('user', { schema: 'public' })
export class UserPg extends User {
  @Column('uuid', {
    primary: true,
    name: 'id',
  })
  id: string;

  @Column('character varying', { name: 'name', length: 100 })
  name: string;

  @Column('enum', {
    name: 'status',
    enum: EStatus,
    default: EStatus.ACTIVE,
  })
  status: EStatus;

  @Column('character varying', { name: 'username', length: 100 })
  username: string;

  @Column('character varying', { name: 'password', length: 64 })
  password: string;

  @Column('character varying', { name: 'email', length: 500 })
  email: string;
}
