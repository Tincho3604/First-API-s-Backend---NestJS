import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppService {
  @Get()
  getHello(): string {
    return 'Inicio de sesion 22';
  }
}
