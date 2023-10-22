import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import datasource from './datasource';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [
    // MikroOrmModule.forRoot(datasource),
    MikroOrmModule.forFeature([UserEntity]),
  ],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class DatabaseModule {}
