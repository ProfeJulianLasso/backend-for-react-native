import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsOptional, IsString } from 'class-validator';

@InputType()
export class UserInput {
  @Field(() => String, {
    description: 'Nombre de la persona',
  })
  @IsString()
  nombre: string;

  @Field(() => String, {
    description: 'Apellido de la persona',
  })
  @IsString()
  apellido: string;

  @Field(() => Int, {
    description: 'Edad de la persona',
    nullable: true,
  })
  @IsOptional()
  @IsInt()
  edad?: number;
}
