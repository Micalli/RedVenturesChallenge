import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ProteinsRepository } from './repositories/proteins.repository';
import { BrothsRepository } from './repositories/broths.repository';
import { OrdersRepository } from './repositories/orders.repository';
import { RecipesRepository } from './repositories/recipes.repository';
@Global()
@Module({
  providers: [
    PrismaService,
    ProteinsRepository,
    BrothsRepository,
    OrdersRepository,
    RecipesRepository,
  ],
  exports: [
    ProteinsRepository,
    BrothsRepository,
    OrdersRepository,
    RecipesRepository,
  ],
})
export class DatabaseModule {}
