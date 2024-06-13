import {
  Controller,
  Get,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { BrothsService } from './broths.service';
import { CreateBrothDto } from './dto/create-broth.dto';

@Controller('broths')
export class BrothsController {
  constructor(private readonly brothsService: BrothsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createBrothDto: CreateBrothDto) {
    return this.brothsService.create(createBrothDto);
  }

  @Get()
  findAll() {
    return this.brothsService.findAll();
  }
}
