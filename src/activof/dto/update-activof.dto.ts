import { PartialType } from '@nestjs/mapped-types';
import { CreateActivofDto } from './create-activof.dto';

export class UpdateActivofDto extends PartialType(CreateActivofDto) {}
