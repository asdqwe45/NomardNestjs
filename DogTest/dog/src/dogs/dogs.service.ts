import { Injectable, NotFoundException } from '@nestjs/common';
import { Dog } from './entities/dogs.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dog)
    private dogsRepository: Repository<Dog>,
  ) {}
  private dogs: Dog[] = [];

  findAll(): Promise<Dog[]> {
    return this.dogsRepository.find();
  }
  async getOne(id: number): Promise<Dog[]> {
    const dog = await this.dogsRepository.find();
    console.log(dog);
    if (!dog) {
      throw new NotFoundException(`Movie with ID ${id} Not Found.`);
    }
    return dog;
  }

  findOne(DogID: number): Promise<Dog[]> {
    const dog =this.dogsRepository.find();
    return dog;
  }
}
