import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MahasiswaService } from './mahasiswa.service';

@Controller('mahasiswa')
export class MahasiswaController {
  private readonly mahasiswaService: MahasiswaService;

  @Get()
  findAll() {
    return [];
  }

  @Post()
  create(@Body() mahasiswa) {
    return mahasiswa;
  }

  @Put(':id')
  update(@Body() updateMahasiswa, @Param('id') id: string) {
    return id;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return id;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return id;
  }
}
