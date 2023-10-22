import { UserEntity } from 'src/infrastructure/database/entities/user.entity';
import { LoginInput, LoginOutput } from 'src/presentation/graphql/typings';

export const ILoginUseCase = Symbol.for('ILoginUseCase');

export interface ILoginUseCase {
  execute(data: LoginInput): Promise<LoginOutput>;
}
