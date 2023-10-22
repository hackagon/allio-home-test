import { Body, Controller, Inject, Post } from '@nestjs/common';
import { IRegisterUseCase } from 'src/domain/usecase/register';

@Controller()
export class UserController {
  constructor(
    @Inject(IRegisterUseCase)
    private readonly registerUseCase: IRegisterUseCase,
  ) {}

  @Post('/register')
  register(@Body() data: any) {
    return this.registerUseCase.execute(data);
  }
}
