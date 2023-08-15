import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { MyException } from './my-exception.filter';

@Catch(MyException)
export class Example1Filter implements ExceptionFilter {
  catch(exception: MyException, host: ArgumentsHost) {
    console.log('Example1Filter');
    console.log(exception);

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      message: exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
