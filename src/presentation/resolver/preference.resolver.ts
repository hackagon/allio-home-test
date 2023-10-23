import { Inject, UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { IFindPreferencesUseCase } from 'src/domain/usecase/find-preferences';
import { UserEntity } from 'src/infrastructure/database/entities/user.entity';
import { PreferenceOutput } from '../graphql/typings';
import { AuthGuard } from '../guard/auth.guard';
import { CurrentUser } from '../guard/user.decorator';

@Resolver('preference')
export class PreferenceResolver {
  constructor(
    @Inject(IFindPreferencesUseCase)
    private readonly findPreferencesUseCase: IFindPreferencesUseCase,
  ) {}

  @Query('getPreferences')
  @UseGuards(AuthGuard)
  async getPreferences(
    @CurrentUser() user: UserEntity,
  ): Promise<PreferenceOutput> {
    return this.findPreferencesUseCase.execute(user.id);
  }
}
