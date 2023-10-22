import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { PreferenceEntity } from './entities/preference.entity';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [MikroOrmModule.forFeature([UserEntity, PreferenceEntity])],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class DatabaseModule {}
