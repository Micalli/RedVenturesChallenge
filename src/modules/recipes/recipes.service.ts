import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { RecipesRepository } from 'src/shared/database/repositories/recipes.repository';

@Injectable()
export class RecipesService {
  constructor(private readonly recipesRepository: RecipesRepository) {}

  create(createRecipeDto: CreateRecipeDto) {
    const { image, name } = createRecipeDto;

    return this.recipesRepository.create({
      data: {
        name,
        image,
      },
    });
  }

  findAll() {
    return this.recipesRepository.findMany();
  }
}
