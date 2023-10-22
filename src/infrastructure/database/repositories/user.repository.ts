import { UserEntity } from '../entities/user.entity';
import { EntityRepository, MikroORM } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';
import { InjectRepository } from '@mikro-orm/nestjs';

export class UserRepository {
  constructor(
    private readonly orm: MikroORM,
    private readonly em: EntityManager,
    @InjectRepository(UserEntity)
    private readonly userRepository: EntityRepository<UserEntity>,
  ) {}

  async create(userData) {
    const user = new UserEntity(userData.email, userData.password);
    user.id = 1;
    // user.email = userData.email;
    // user.password = userData.password;

    console.log(this.em);

    const res = await this.userRepository.upsert(user);

    // await this.em.persistAndFlush(user);

    return res;
  }
}
