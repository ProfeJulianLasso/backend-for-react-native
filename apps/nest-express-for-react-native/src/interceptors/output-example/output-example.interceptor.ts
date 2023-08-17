import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { DataDto, OutputDataDto } from '../../dto';

@Injectable()
export class OutputExampleInterceptor
  implements NestInterceptor<DataDto, OutputDataDto>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<DataDto>,
  ): Observable<OutputDataDto> | Promise<Observable<OutputDataDto>> {
    // Para poder comprender mejor el funcionamiento de los interceptors
    // en su respuesta, es necesario aprender a manejar la biblioteca RxJs
    // https://rxjs.dev/
    // https://rxjs.dev/guide/operators
    // https://rxjs.dev/guide/observable
    // Ya que el resultado de un interceptor es un observable, es necesario
    // aprender a manejarlo para poder comprender el funcionamiento de los
    // interceptors cuando se usan en modo salida de información
    return next.handle().pipe(
      map((data) => {
        const outputData = new OutputDataDto();
        outputData.id = data.id;
        outputData.name = data.name?.toLocaleUpperCase();
        outputData.description = 'This is description';
        return outputData;
      }),
    );
  }
}
