import { PartialType } from '@nestjs/mapped-types';
import { CreateDogDto } from './create.dog.dto';
import { IsDateString } from 'class-validator';

export class UpdateDogDto extends PartialType(CreateDogDto) {
    [key:string]: any;
}