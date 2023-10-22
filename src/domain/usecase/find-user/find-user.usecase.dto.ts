import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infrastructure/database/repositories/user.repository';
import { IFindUserUseCase } from './i-find-user.usecase';

@Injectable()
export class FindUserUseCase implements IFindUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: number): Promise<any> {
    return this.userRepository.findById(userId);
  }
}
