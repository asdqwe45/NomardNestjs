import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('Dog')
export class Dog { 
  [x: string]: any;
  @PrimaryGeneratedColumn()
  DogID: number;

  @Column({ length: 50 })
  Sex: string;

  @Column('int')
  Age: number;

  @Column({ length: 255 })
  ChipNumber: string;

  @Column({ length: 255 })
  Image: string;

  @Column({ length: 50 })
  Breed: string;

  @Column({ length: 50 })
  RemainedDay: string;

  @Column({ length: 50 })
  DogSize: string;

  @Column('int')
  Weight: number;

  @Column({ length: 50 })
  Status: string;

  @Column('date', { nullable: true })
  EnteredDay: Date;

  @Column({ length: 255, nullable: true })
  DiscoveredPlace: string;

  @Column({ length: 255, nullable: true })
  LostLocation: string;

  @Column('date', { nullable: true })
  LostDate: Date;

  @Column({ length: 50, nullable: true })
  ReturnedHome: string;
}