import { UserOutput } from 'src/presentation/graphql/typings';

export const IFindUserUseCase = Symbol.for('IFindUserUseCase');

export interface IFindUserUseCase {
  execute(userId: number): Promise<UserOutput>;
}
