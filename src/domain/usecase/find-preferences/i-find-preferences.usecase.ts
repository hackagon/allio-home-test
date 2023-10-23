import { PreferenceOutput } from 'src/presentation/graphql/typings';

export const IFindPreferencesUseCase = Symbol.for('IFindPreferencesUseCase');

export interface IFindPreferencesUseCase {
  execute(userId: number): Promise<PreferenceOutput>;
}
