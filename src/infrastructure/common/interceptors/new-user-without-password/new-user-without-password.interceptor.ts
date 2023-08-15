import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { NewUserWithoutPasswordDto } from '../../dto';
import { User } from '../../../persistence';

@Injectable()
export class NewUserWithoutPasswordInterceptor
  implements NestInterceptor<User, NewUserWithoutPasswordDto>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<User>,
  ):
    | Observable<NewUserWithoutPasswordDto>
    | Promise<Observable<NewUserWithoutPasswordDto>> {
    return next.handle().pipe(
      map((data) => {
        const outputData = new NewUserWithoutPasswordDto();
        outputData.id = data.id;
        outputData.name = data.name;
        outputData.username = data.username;
        outputData.email = data.email;
        return outputData;
      }),
    );
  }
}
