import { Injectable } from '@nestjs/common';
import { CreateCompaniaDto } from './dto/create-compania.dto';
import { UpdateCompaniaDto } from './dto/update-compania.dto';

@Injectable()
export class CompaniaService {
  create(createCompaniaDto: CreateCompaniaDto) {
    return 'This action adds a new compania';
  }

  findAll() {
    return `This action returns all compania`;
  }

  findOne(id: number) {
    return `This action returns a #${id} compania`;
  }

  update(id: number, updateCompaniaDto: UpdateCompaniaDto) {
    return `This action updates a #${id} compania`;
  }

  remove(id: number) {
    return `This action removes a #${id} compania`;
  }
}
