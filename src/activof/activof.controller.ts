import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivofService } from './activof.service';
import { CreateActivofDto } from './dto/create-activof.dto';
import { UpdateActivofDto } from './dto/update-activof.dto';

@Controller('activof')
export class ActivofController {
  constructor(private readonly activofService: ActivofService) {}

  @Post()
  create(@Body() createActivofDto: CreateActivofDto) {
    return this.activofService.create(createActivofDto);
  }

  @Get()
  findAll() {
    return this.activofService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activofService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivofDto: UpdateActivofDto) {
    return this.activofService.update(+id, updateActivofDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activofService.remove(+id);
  }
}
