import { Mutation, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';

@Resolver()
export class HolaMundoMutationResolver {
  @Mutation(() => String, {
    description: 'Saluda a una persona',
    name: 'HolaMundoMutation',
  })
  holaMundo(): Observable<string> {
    return new Observable<string>((observer) => {
      observer.next('Hola Mundo!');
      observer.complete();
    });
  }
}
