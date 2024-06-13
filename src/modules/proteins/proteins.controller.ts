import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProteinsService } from './proteins.service';
import { CreateProteinDto } from './dto/create-protein.dto';

@Controller('proteins')
export class ProteinsController {
  constructor(private readonly proteinsService: ProteinsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createProteinDto: CreateProteinDto) {
    return this.proteinsService.create(createProteinDto);
  }

  @Get()
  findAll() {
    return this.proteinsService.findAll();
  }
}
