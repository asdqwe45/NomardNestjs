import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return `hello world`;
  }

  @Post('/hello')
  sayHello(): string {
    return 'Hello everyone';
  }
}
