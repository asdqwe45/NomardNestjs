import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: "mariadb", // 어떤 DB인가?
  host: process.env.DB_HOST, // DB host
  port: parseInt(process.env.DB_PORT), // DB port
  username: process.env.DB_USER, // 사용자명
  password: process.env.DB_PASS, // 사용자 패스워드
  database: process.env.DB_DATABASE, // 스키마 이름
  synchronize: true, // 테이블을 생성할꺼냐 묻는 속성, 최초에 한번만 true
}

