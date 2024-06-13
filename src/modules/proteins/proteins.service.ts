import { Injectable } from '@nestjs/common';
import { CreateProteinDto } from './dto/create-protein.dto';
import { ProteinsRepository } from 'src/shared/database/repositories/proteins.repository';

@Injectable()
export class ProteinsService {
  constructor(private readonly proteinsRepository: ProteinsRepository) {}

  create(createProteinDto: CreateProteinDto) {
    const { description, imageActive, imageInactive, name, price } =
      createProteinDto;

    return this.proteinsRepository.create({
      data: {
        description,
        imageActive,
        imageInactive,
        name,
        price,
      },
    });
  }

  findAll() {
    return this.proteinsRepository.findMany();
  }
}
