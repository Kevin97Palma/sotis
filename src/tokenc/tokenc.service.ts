import { Injectable } from '@nestjs/common';
import { CreateTokencDto } from './dto/create-tokenc.dto';
import { UpdateTokencDto } from './dto/update-tokenc.dto';

@Injectable()
export class TokencService {
  create(createTokencDto: CreateTokencDto) {
    return 'This action adds a new tokenc';
  }

  findAll() {
    return `This action returns all tokenc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tokenc`;
  }

  update(id: number, updateTokencDto: UpdateTokencDto) {
    return `This action updates a #${id} tokenc`;
  }

  remove(id: number) {
    return `This action removes a #${id} tokenc`;
  }
}
