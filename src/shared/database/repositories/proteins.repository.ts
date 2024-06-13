import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProteinsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDto?: Prisma.ProteinFindManyArgs) {
    return this.prismaService.protein.findMany(findManyDto);
  }

  create(createDto: Prisma.ProteinCreateArgs) {
    return this.prismaService.protein.create(createDto);
  }
}
