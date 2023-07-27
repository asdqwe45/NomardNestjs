import { Controller, Get, Param } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from './entities/dogs.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Controller('dogs')
export class DogController {
  constructor(
    private readonly dogService: DogsService
  ) {}
  private dogs: Dog[] = [];
  @Get()
  async findAll(): Promise<any> {
    const dogs = await this.dogService.findAll();
    const obj ={
      "dogs": dogs,
    };
    return obj;
  }
  @Get('/:id')
  async getOne(@Param('id') id : string ): Promise<any> {
    const dogs = await this.dogService.findAll();
    //console.log(dogs);
    const dog = dogs.map((dog) => {
      if(dog.DogID === parseInt(id)){
        
      }
      dog.find((dog) => dog.DogID === parseInt(id))
    });
    const array = {
      "dogs": dog,
    };
    // if(!dog){
    //   throw new NotFoundException(`dog with ID ${DogID} Not Found.`)
    // }
    return array;
  }
}