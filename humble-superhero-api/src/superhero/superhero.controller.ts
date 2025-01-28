import {
  Body,
  Controller,
  Get,
  Post,
  BadRequestException,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { SuperheroService } from './superhero.service';
import { SuperheroDto } from './superhero.dto';

@ApiTags('superheroes')
@Controller('superheroes')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  @Post()
  @ApiBody({
    description: 'Superhero details',
    type: SuperheroDto,
  })
  @ApiResponse({ status: 201, description: 'Superhero added successfully.' })
  @ApiResponse({
    status: 400,
    description: 'Superhero with this name already exists.',
  })
  addSuperhero(@Body(new ValidationPipe()) createSuperheroDto: SuperheroDto) {
    const { name, superpower, humilityScore } = createSuperheroDto;
    if (
      this.superheroService.getSuperheroes().some((hero) => hero.name === name)
    ) {
      throw new BadRequestException('Superhero with this name already exists');
    }
    this.superheroService.addSuperhero({ name, superpower, humilityScore });
    return { message: 'Superhero added successfully!' };
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of superheroes, sorted by humility score.',
    type: [SuperheroDto],
  })
  getSuperheroes(): SuperheroDto[] {
    return this.superheroService.getSuperheroes();
  }
}
