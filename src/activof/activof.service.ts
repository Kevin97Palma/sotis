import { Injectable } from '@nestjs/common';
import { CreateActivofDto } from './dto/create-activof.dto';
import { UpdateActivofDto } from './dto/update-activof.dto';

@Injectable()
export class ActivofService {
  create(createActivofDto: CreateActivofDto) {
    return 'This action adds a new activof';
  }

  findAll() {
    return `This action returns all activof`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activof`;
  }

  update(id: number, updateActivofDto: UpdateActivofDto) {
    return `This action updates a #${id} activof`;
  }

  remove(id: number) {
    return `This action removes a #${id} activof`;
  }
}
