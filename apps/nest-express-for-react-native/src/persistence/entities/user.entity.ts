import * as crypto from 'node:crypto';
import { Column, Entity, OneToMany } from 'typeorm';
import { Status } from '../enums';
import { ToDo } from './to-do.entity';

@Entity({ name: 'users', schema: 'security' })
export class User {
  @Column({
    name: 'user_id',
    type: 'uuid',
    primary: true,
    default: () => 'uuid_generate_v4()', // CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  })
  id: string;

  @Column({
    name: 'user_name',
    type: 'character varying',
    length: 100,
    nullable: true,
  })
  name?: string;

  @Column({
    name: 'user_email',
    type: 'character varying',
    length: 500,
  })
  email: string;

  @Column({
    name: 'user_password',
    type: 'character varying',
    length: 64,
    transformer: {
      to: (value: string) => encryptPassword(value),
      from: (value: string) => value,
    },
  })
  password: string;

  // @Column({
  //   name: 'user_status',
  //   type: 'boolean',
  //   default: true,
  // })
  // status: boolean;

  @Column({
    name: 'user_status',
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: boolean;

  @Column({
    name: 'user_created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @OneToMany(() => ToDo, (toDo) => toDo.user, { cascade: ['insert', 'update'] })
  toDos: ToDo[];
}

const encryptPassword = (password: string) => {
  return crypto.createHash('sha256').update(password).digest('hex');
};
