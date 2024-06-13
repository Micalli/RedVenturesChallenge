import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class RecipesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDto?: Prisma.RecipesFindManyArgs) {
    return this.prismaService.recipes.findMany(findManyDto);
  }

  create(createDto: Prisma.RecipesCreateArgs) {
    return this.prismaService.recipes.create(createDto);
  }
}
