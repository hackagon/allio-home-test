import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { PreferenceEntity } from './entities/preference.entity';
import { UserEntity } from './entities/user.entity';
import { PreferenceRepository } from './repositories/preference.repository';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [MikroOrmModule.forFeature([UserEntity, PreferenceEntity])],
  providers: [UserRepository, PreferenceRepository],
  exports: [UserRepository, PreferenceRepository],
})
export class DatabaseModule {}
