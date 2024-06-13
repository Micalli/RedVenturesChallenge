import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersRepository } from 'src/shared/database/repositories/orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}
  create(createOrderDto: CreateOrderDto) {
    const { brothId, proteinId } = createOrderDto;

    return this.ordersRepository.create({
      data: {
        brothId,
        proteinId,
      },
    });
  }

  findAll() {
    return this.ordersRepository.findMany();
  }
}
