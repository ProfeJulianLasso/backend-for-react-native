import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DataDto } from '../../dto/data.dto';

@Controller('example')
export class ExampleController {
  @Get('one-1/:id/:name')
  example1(@Param('id') id: number, @Param('name') name: string): string {
    return `example1 ${id} - ${name}`;
  }

  @Get('one-2')
  example11(@Query('id') id: number, @Query('name') name: string): string {
    return `example1 ${id} - ${name}`;
  }

  @Post('two')
  example2(@Body() data: DataDto): string {
    return `example2 ${data.id} - ${data.name}`;
  }
}
