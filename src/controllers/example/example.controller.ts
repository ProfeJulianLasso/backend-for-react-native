import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { DataDto } from '../../dto/data.dto';

@Controller('example')
export class ExampleController {
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
    return `example1 ${id} - ${name}`;
  }

  @Post('two')
  example2(@Body() data: DataDto): string {
    console.log(data instanceof DataDto);
    return `example2 ${data.id} - ${data.name}`;
  }
}
