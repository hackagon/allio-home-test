import { Injectable } from '@nestjs/common';
import { PreferenceRepository } from 'src/infrastructure/database/repositories/preference.repository';
import { IFindPreferencesUseCase } from './i-find-preferences.usecase';

@Injectable()
export class FindPreferencesUseCase implements IFindPreferencesUseCase {
  constructor(private preferenceRepository: PreferenceRepository) {}

  async execute(userId: number): Promise<any> {
    return this.preferenceRepository.findAll(userId);
  }
}
