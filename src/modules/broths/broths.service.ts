import { Injectable } from '@nestjs/common';
import { CreateBrothDto } from './dto/create-broth.dto';
import { BrothsRepository } from 'src/shared/database/repositories/broths.repository';

@Injectable()
export class BrothsService {
  constructor(private readonly brothsRepository: BrothsRepository) {}

  create(createBrothDto: CreateBrothDto) {
    const { description, imageActive, imageInactive, name, price } =
      createBrothDto;

    return this.brothsRepository.create({
      data: { description, imageActive, imageInactive, name, price },
    });
  }

  findAll() {
    return this.brothsRepository.findMany();
  }
}
