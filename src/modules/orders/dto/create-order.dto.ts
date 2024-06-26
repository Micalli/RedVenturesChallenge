import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  brothId: string;

  @IsString()
  @IsNotEmpty()
  proteinId: string;
}
