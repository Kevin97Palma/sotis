import { Module } from '@nestjs/common';
import { CompaniaService } from './compania.service';
import { CompaniaController } from './compania.controller';

@Module({
  controllers: [CompaniaController],
  providers: [CompaniaService],
})
export class CompaniaModule {}
