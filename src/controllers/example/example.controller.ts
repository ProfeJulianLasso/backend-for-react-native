import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { DataDto } from '../../dto';
import { MyException } from '../../exception-filters';
import { Example1Guard } from '../../guards/example1';
import {
  InputExampleInterceptor,
  OutputExampleInterceptor,
} from '../../interceptors';

@Controller('example')
export class ExampleController {
  @UseGuards(Example1Guard)
  @Get('one-1/:id/:name')
  example1(
    @Param('id', ParseIntPipe) id: number,
    @Param('name') name: string,
  ): string {
    return `example1 ${id} - ${name}`;
  }

  @Get('one-2')
  example11(
    @Query('id', ParseIntPipe) id: number,
    @Query('name') name: string,
  ): string {
    console.log(id + 1, typeof name);
    throw new MyException('Esto es una excepción personalizada');
  }

  @UseInterceptors(InputExampleInterceptor)
  @Post('two')
  example2(@Body() data: DataDto): string {
    console.log(data instanceof DataDto);
    return `example2 ${data.id} - ${data.name}`;
  }

  @UseInterceptors(OutputExampleInterceptor)
  @Get('three')
  example3(): DataDto {
    return {
      id: 1,
      name: 'example-3',
    };
  }
}
