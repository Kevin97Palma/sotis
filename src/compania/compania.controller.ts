import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompaniaService } from './compania.service';
import { CreateCompaniaDto } from './dto/create-compania.dto';
import { UpdateCompaniaDto } from './dto/update-compania.dto';

@Controller('compania')
export class CompaniaController {
  constructor(private readonly companiaService: CompaniaService) {}

  @Post()
  create(@Body() createCompaniaDto: CreateCompaniaDto) {
    return this.companiaService.create(createCompaniaDto);
  }

  @Get()
  findAll() {
    return this.companiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companiaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompaniaDto: UpdateCompaniaDto) {
    return this.companiaService.update(+id, updateCompaniaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companiaService.remove(+id);
  }
}
