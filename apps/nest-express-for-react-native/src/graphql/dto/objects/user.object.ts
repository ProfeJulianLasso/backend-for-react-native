import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserObject {
  @Field(() => String, {
    description: 'Nombre de la persona',
    name: 'name',
  })
  nombre: string;

  @Field(() => String, {
    description: 'Apellido de la persona',
    name: 'lastname',
  })
  apellido: string;

  @Field(() => Int, {
    description: 'Edad de la persona',
    nullable: true,
    name: 'age',
  })
  edad?: number;
}
