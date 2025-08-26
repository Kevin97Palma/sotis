import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivolService } from './activol.service';
import { CreateActivolDto } from './dto/create-activol.dto';
import { UpdateActivolDto } from './dto/update-activol.dto';

@Controller('activol')
export class ActivolController {
  constructor(private readonly activolService: ActivolService) {}

  @Post()
  create(@Body() createActivolDto: CreateActivolDto) {
    return this.activolService.create(createActivolDto);
  }

  @Get()
  findAll() {
    return this.activolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activolService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivolDto: UpdateActivolDto) {
    return this.activolService.update(+id, updateActivolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activolService.remove(+id);
  }
}
