import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class Example1Middleware implements NestMiddleware<Request, Response> {
  use(request: Request, response: Response, next: NextFunction) {
    const { body, headers } = request;
    console.log('Example1Middleware');
    console.log('body', body);
    console.log('headers', headers);
    next();
  }
}
