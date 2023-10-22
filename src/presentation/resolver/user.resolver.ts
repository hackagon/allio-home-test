import { Inject, UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { IFindUserUseCase } from 'src/domain/usecase/find-user';
import { UserEntity } from 'src/infrastructure/database/entities/user.entity';
import { UserOutput } from '../graphql/typings';
import { AuthGuard } from '../guard/auth.guard';
import { CurrentUser } from '../guard/user.decorator';

@Resolver('user')
export class UserResolver {
  constructor(
    @Inject(IFindUserUseCase)
    private readonly findUserUseCase: IFindUserUseCase,
  ) {}

  @Query('getMe')
  @UseGuards(AuthGuard)
  async getMe(@CurrentUser() user: UserEntity): Promise<UserOutput> {
    console.log(user);
    return this.findUserUseCase.execute(user.id);
  }
}
