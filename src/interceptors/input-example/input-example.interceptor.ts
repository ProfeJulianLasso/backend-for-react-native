import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class InputExampleInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    const { body, query, params } = request;

    console.log('body', body);
    console.log('query', query);
    console.log('params', params);

    body.name = 'Andrés'; // reemplaza lo que entra por la palabra Andrés

    return next.handle();
  }
}
