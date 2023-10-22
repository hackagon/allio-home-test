import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infrastructure/database/repositories/user.repository';
import { ILoginUseCase } from './i-login.usecase';
import crypto from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { LoginInput, LoginOutput } from 'src/presentation/graphql/typings';

@Injectable()
export class LoginUseCase implements ILoginUseCase {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async execute(data: LoginInput): Promise<LoginOutput> {
    const { email, password } = data;
    const foundUser = await this.userRepository.findByEmail(email);

    if (!foundUser) throw new BadRequestException('User or password incorrect');

    const hashPassword = crypto.createHmac('sha256', password).digest('hex');
    if (foundUser.password !== hashPassword)
      throw new BadRequestException('User or password incorrect');

    const payload = {
      sub: foundUser.id,
      email: foundUser.email,
    };

    return {
      jwt: await this.jwtService.signAsync(payload),
    };
  }
}
