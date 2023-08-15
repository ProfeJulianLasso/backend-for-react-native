import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class Example1Guard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    console.log('Example1Guard', request.url);
    console.log('Example1Guard', request.headers);
    console.log('Example1Guard', request.body);
    return true; // true para continuar, false para bloquear
  }
}
