import { Injectable, NotFoundException } from '@nestjs/common';
import { Dog } from 'src/dogs/entities/dogs.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDogDto } from 'src/dogs/DTO/create.dog.dto';
import { UpdateDogDto } from 'src/dogs/DTO/update.dog.dto';

@Injectable()
export class LostDogsService {
  constructor(
    @InjectRepository(Dog)
    private dogsRepository: Repository<Dog>,
  ) {}
  async getAllLostDogs(): Promise<any> {
    const dogs = await this.dogsRepository.find();
    const obj = {
        dogs:dogs.filter(dog => dog.Status === "lost")
  };
    return obj;
  } 
  async getOneLostDog(DogID: number): Promise<Dog> {
    let dogs = await this.dogsRepository.find();
    const dog = dogs.find((dog) => dog.DogID === DogID && dog.Status === "stray"); 
    if(!dog) {
        throw new NotFoundException(`LostDog with ID ${DogID} not found.`);
    }
    return dog;
  }
  async deleteOne(DogID: number): Promise<void> {
    this.getOneLostDog(DogID);
    this.dogsRepository.delete(DogID);
  } 

  async create(dogData : CreateDogDto): Promise<void> {
    dogData.Status = "stray";
    await this.dogsRepository.save(dogData);
  }
  
  async update(DogID: number, updateData: UpdateDogDto): Promise<void> {
    this.getOneLostDog(DogID);
    await this.dogsRepository.update(DogID, updateData);
  }
}
