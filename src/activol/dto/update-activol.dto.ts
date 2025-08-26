import { PartialType } from '@nestjs/mapped-types';
import { CreateActivolDto } from './create-activol.dto';

export class UpdateActivolDto extends PartialType(CreateActivolDto) {}
