import { Module } from '@nestjs/common';
import { ActivofService } from './activof.service';
import { ActivofController } from './activof.controller';

@Module({
  controllers: [ActivofController],
  providers: [ActivofService],
})
export class ActivofModule {}
