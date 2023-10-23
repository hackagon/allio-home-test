import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { PreferenceEntity } from '../entities/preference.entity';

@Injectable()
export class PreferenceRepository {
  constructor(
    @InjectRepository(PreferenceEntity)
    private readonly preferenceRepository: EntityRepository<PreferenceEntity>,
  ) {}

  findAll(userId: number) {
    return this.preferenceRepository.find({ userId });
  }
}
