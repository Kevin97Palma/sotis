import { Injectable } from '@nestjs/common';
import { CreateActivolDto } from './dto/create-activol.dto';
import { UpdateActivolDto } from './dto/update-activol.dto';

@Injectable()
export class ActivolService {
  create(createActivolDto: CreateActivolDto) {
    return 'This action adds a new activol';
  }

  findAll() {
    return `This action returns all activol`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activol`;
  }

  update(id: number, updateActivolDto: UpdateActivolDto) {
    return `This action updates a #${id} activol`;
  }

  remove(id: number) {
    return `This action removes a #${id} activol`;
  }
}
