import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class OrdersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDto?: Prisma.OrderFindManyArgs) {
    return this.prismaService.order.findMany(findManyDto);
  }

  create(createDto: Prisma.OrderCreateArgs) {
    return this.prismaService.order.create(createDto);
  }
}
