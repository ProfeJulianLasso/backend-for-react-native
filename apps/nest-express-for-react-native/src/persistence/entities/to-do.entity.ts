import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Status } from '../enums';
import { User } from './user.entity';

@Entity({ name: 'to_do', schema: 'public' })
export class ToDo {
  @Column({
    name: 'to_do_id',
    type: 'uuid',
    primary: true,
    default: () => 'uuid_generate_v4()', // CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  })
  id: string;

  @Column({
    name: 'to_do_user_id',
    type: 'uuid',
  })
  userId: string;

  @Column({
    name: 'to_do_title',
    type: 'character varying',
    length: 100,
  })
  title: string;

  @Column({
    name: 'to_do_description',
    type: 'character varying',
    length: 500,
    nullable: true,
  })
  description?: string;

  @Column({
    name: 'to_do_status',
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: boolean;

  @Column({
    name: 'to_do_created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.toDos)
  @JoinColumn({ name: 'to_do_user_id' })
  user: User;
}
