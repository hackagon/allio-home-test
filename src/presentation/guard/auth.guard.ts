import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import _ from 'lodash';
import { config } from 'src/config';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);

    const { req } = ctx.getContext();
    const token = this.extractTokenFromHeader(req);

    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const user = await this.jwtService.verifyAsync(token, {
        secret: config.SECRET_KEY,
      });

      _.set(req, 'user', { id: user.sub });
      return user ? true : false;
    } catch {
      throw new UnauthorizedException();
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
