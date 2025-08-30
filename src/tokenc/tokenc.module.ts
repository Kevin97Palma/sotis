import { Module } from '@nestjs/common';
import { TokencService } from './tokenc.service';
import { TokencController } from './tokenc.controller';

@Module({
  controllers: [TokencController],
  providers: [TokencService],
})
export class TokencModule {}
