import { Injectable } from '@nestjs/common';
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

  findOne(DogID: number): Dog{
    const dog = this.dogs.find((dog) => dog.DogID === DogID);
    return dog;
  }
}
