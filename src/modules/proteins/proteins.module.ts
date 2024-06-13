import { Module } from '@nestjs/common';
import { ProteinsService } from './proteins.service';
import { ProteinsController } from './proteins.controller';

@Module({
  controllers: [ProteinsController],
  providers: [ProteinsService],
})
export class ProteinsModule {}
