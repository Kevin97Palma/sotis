import { Module } from '@nestjs/common';
import { ActivolService } from './activol.service';
import { ActivolController } from './activol.controller';

@Module({
  controllers: [ActivolController],
  providers: [ActivolService],
})
export class ActivolModule {}
