import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [MahasiswaModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
