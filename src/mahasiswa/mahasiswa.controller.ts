import { Controller, Get } from '@nestjs/common';
import { MahasiswaService } from './mahasiswa.service';

@Controller('mahasiswa')
export class MahasiswaController {
  private readonly mahasiswaService: MahasiswaService;

  @Get()
  findAll() {
    return [];
  }
}
