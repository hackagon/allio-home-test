import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/infrastructure/database/entities/user.entity';
import { UserRepository } from 'src/infrastructure/database/repositories/user.repository';
import { IRegisterUseCase } from './i-register.usecase';

@Injectable()
export class RegisterUseCase implements IRegisterUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(data: any): Promise<any> {
    const { email, password } = data;
    return await this.userRepository.create({ email, password });
  }
}
