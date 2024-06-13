import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ProteinsModule } from './modules/proteins/proteins.module';
import { DatabaseModule } from './shared/database/dabase.module';
import { BrothsModule } from './modules/broths/broths.module';
import { OrdersModule } from './modules/orders/orders.module';
import { GlobalAuthMiddleware } from './middlewares/globalAuth.middleware';
import { ConfigModule } from '@nestjs/config';
import { RecipesModule } from './modules/recipes/recipes.module';

@Module({
  imports: [
    ProteinsModule,
    DatabaseModule,
    BrothsModule,
    OrdersModule,
    ConfigModule,
    RecipesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GlobalAuthMiddleware).forRoutes('*');
  }
}
