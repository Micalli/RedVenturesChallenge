import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BrothsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDto?: Prisma.BrothFindManyArgs) {
    return this.prismaService.broth.findMany(findManyDto);
  }

  create(createDto: Prisma.BrothCreateArgs) {
    return this.prismaService.broth.create(createDto);
  }
}
