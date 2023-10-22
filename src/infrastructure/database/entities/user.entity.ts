import { IsEmail } from 'class-validator';
import crypto from 'crypto';
import {
  Entity,
  EntityDTO,
  EntityRepositoryType,
  PrimaryKey,
  Property,
  wrap,
} from '@mikro-orm/core';
import { UserRepository } from '../repositories/user.repository';

@Entity({ tableName: 'user' })
export class UserEntity {
  [EntityRepositoryType]?: UserRepository;

  @PrimaryKey({ autoincrement: true })
  id: number;

  @Property()
  @IsEmail()
  email: string;

  @Property({ hidden: true })
  password: string;

  constructor(email: string, password: string) {
    this.email = email;

    this.password = crypto.createHmac('sha256', password).digest('hex');
  }

  toJSON(user?: UserEntity) {
    const o = wrap<UserEntity>(this).toObject() as UserDTO;

    return o;
  }
}

interface UserDTO extends EntityDTO<UserEntity> {
  following?: boolean;
}
