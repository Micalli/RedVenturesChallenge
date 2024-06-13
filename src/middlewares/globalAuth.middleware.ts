import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GlobalAuthMiddleware implements NestMiddleware {
  private apiKey: string;
  constructor(configService: ConfigService) {
    this.apiKey = configService.get('X_API_KEY');
  }
  async use(req: Request, res: Response, next: NextFunction) {
    const headerApiKey = req.headers['x-api-key'];

    if (headerApiKey !== this.apiKey) {
      throw new ForbiddenException('Access denied.');
    }

    next();
  }
}
