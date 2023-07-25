import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Movie } from 'src/movies/entities/movie.entity';
import * as dotenv from 'dotenv';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'mysql', // 어떤 DB인가?
  host: process.env.DB_HOST, // DB host
  port: parseInt(process.env.DB_PORT), // DB port
  username: process.env.DB_USER, // 사용자명
  password: process.env.DB_PASS, // 사용자 패스워드
  database: process.env.DB_DATABASE, // 스키마 이름
  entities: [Movie], // 만들 테이블들
  synchronize: true, // 테이블을 생성할꺼냐 묻는 속성, 최초에 한번만 true
  autoLoadEntities: true, // 엔티티를 자동 로드할 것인지
  charset: 'utf8mb4', // Schema Character set
  logging: true, // 로깅해줄지를 묻는 속성
  keepConnectionAlive: true, // 핫 리로딩 시에 typeorm의 경우 db연결을 끊어버리기에 false의 경우 db연결이 끊겼다는 메시지를 받는다.
}
