import { PartialType } from '@nestjs/mapped-types';
import { CreateTokencDto } from './create-tokenc.dto';

export class UpdateTokencDto extends PartialType(CreateTokencDto) {}
