import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProteinDto {
  @IsString()
  @IsNotEmpty()
  imageInactive: string;

  @IsString()
  @IsNotEmpty()
  imageActive: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  price: number;
}
