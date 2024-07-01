import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  getMessage(): string {
    return '¡Soy una prueba! 1';
  }

  @Get('nuevo')
  getMessage2(): string {
    return '¡Soy una prueba! 2';
  }
}
