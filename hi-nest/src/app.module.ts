import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movies/entities/movie.entity';
import * as ormconfig from '../ormconfig';

@Module({
  imports: [
    MoviesModule,
    ConfigModule.forRoot({
      envFilePath: ['.development.env'],
    }),
    TypeOrmModule.forRoot(ormconfig),
    MoviesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
