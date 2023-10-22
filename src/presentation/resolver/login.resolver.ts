import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ILoginUseCase } from 'src/domain/usecase/login';
import { LoginInput, LoginOutput } from '../graphql/typings';

@Resolver('login')
export class LoginResolver {
  constructor(
    @Inject(ILoginUseCase)
    private readonly loginUseCase: ILoginUseCase,
  ) {}

  @Mutation()
  async login(@Args('data') data: LoginInput): Promise<LoginOutput> {
    return this.loginUseCase.execute(data);
  }
}
