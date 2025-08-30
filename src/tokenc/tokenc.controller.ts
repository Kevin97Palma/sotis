import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TokencService } from './tokenc.service';
import { CreateTokencDto } from './dto/create-tokenc.dto';
import { UpdateTokencDto } from './dto/update-tokenc.dto';

@Controller('tokenc')
export class TokencController {
  constructor(private readonly tokencService: TokencService) {}

  @Post()
  create(@Body() createTokencDto: CreateTokencDto) {
    return this.tokencService.create(createTokencDto);
  }

  @Get()
  findAll() {
    return this.tokencService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tokencService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTokencDto: UpdateTokencDto) {
    return this.tokencService.update(+id, updateTokencDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tokencService.remove(+id);
  }
}
