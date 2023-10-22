import { UserEntity } from 'src/infrastructure/database/entities/user.entity';

export const IRegisterUseCase = Symbol.for('IRegisterUseCase');

export interface IRegisterUseCase {
  execute(data: any): Promise<UserEntity>;
}
