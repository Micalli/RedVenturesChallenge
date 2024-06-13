import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  image: string;
}
