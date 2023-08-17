import { Controller, Get } from '@nestjs/common';
import { Observable, lastValueFrom } from 'rxjs';
import { Micro1Service } from '../../services/micro1/micro1.service';

@Controller('micro1')
export class Micro1Controller {
  constructor(private readonly micro1Service: Micro1Service) {}

  @Get()
  getHello(): Observable<string> {
    return this.micro1Service.getHello();
  }

  @Get('sumar')
  async sumar(): Promise<string> {
    const data = await lastValueFrom(this.micro1Service.sumar(1, 2));
    return `Respuesta: ${data}`;
  }

  @Get('create-user')
  createUser(): string {
    this.micro1Service.createUser('Hola Mundo!');
    return 'Usuario creado';
  }

  @Get('create-hero')
  createHero(): string {
    this.micro1Service.createHero('Superman');
    return 'Heroe creado';
  }
}
