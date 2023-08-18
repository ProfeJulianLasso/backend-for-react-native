import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { UserInput } from '../../dto/inputs';
import { UserObject } from '../../dto/objects';

@Resolver()
export class HolaMundoResolver {
  @Query(() => String)
  holaMundo(): string {
    return 'Hola Mundo!';
  }

  @Query(() => [String])
  holaMundoArray(): Array<string> {
    return ['Hola', 'Mundo', '!'];
  }

  @Query(() => String)
  holaMundoParams(
    @Args('nombre', {
      description: 'Nombre de la persona',
    })
    nombre: string,
    @Args('apellido', {
      description: 'Apellido de la persona',
    })
    apellido: string,
    @Args('edad', {
      description: 'Edad de la persona',
      nullable: true,
      type: () => Int,
    })
    edad?: number,
  ): string {
    if (!edad) {
      return `Hola ${nombre} ${apellido}!`;
    }
    return `Hola ${nombre} ${apellido}! Tienes ${edad} años.`;
  }

  @Query(() => String, {
    description: 'Saluda a una persona',
    name: 'HolaMundoConInput',
  })
  holaMundoInput(
    @Args('user', {
      description: 'Datos de la persona',
    })
    user: UserInput,
  ): string {
    if (!user.edad) {
      return `Hola ${user.nombre} ${user.apellido}!`;
    }
    return `Hola ${user.nombre} ${user.apellido}! Tienes ${user.edad} años.`;
  }

  @Query(() => UserObject)
  saludo(
    @Args('user', {
      description: 'Datos de la persona',
    })
    user: UserInput,
  ): UserObject {
    const { nombre, apellido, edad } = user;
    const userObject: UserObject = {
      nombre,
      apellido,
      edad,
    };
    return userObject;
  }

  @Query(() => [UserObject])
  saludoArray(
    @Args('user', {
      description: 'Datos de la persona',
    })
    user: UserInput,
  ): UserObject[] {
    const { nombre, apellido, edad } = user;
    const userObject: UserObject = {
      nombre,
      apellido,
      edad,
    };
    return [userObject, userObject, userObject];
  }
}
