import { UserEntity } from '../entities/user.entity';
import { EntityRepository } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(
    private readonly em: EntityManager,
    @InjectRepository(UserEntity)
    private readonly userRepository: EntityRepository<UserEntity>,
  ) {}

  async create(userData) {
    const user = new UserEntity(userData.email, userData.password);

    await this.em.persistAndFlush(user);
    return this.buildUserRO(user);
  }

  async findByEmail(email: string) {
    return this.userRepository.findOne({ email });
  }

  async findById(id: number) {
    const foundUser = await this.userRepository.findOne({ id });

    return foundUser;
  }

  private buildUserRO(user: UserEntity) {
    const userRO = {
      email: user.email,
    };

    return { user: userRO };
  }
}
