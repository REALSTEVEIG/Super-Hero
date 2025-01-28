import { Injectable } from '@nestjs/common';

export interface Superhero {
  name: string;
  superpower: string;
  humilityScore: number;
}

@Injectable()
export class SuperheroService {
  private superheroes: Superhero[] = [];

  addSuperhero(superhero: Superhero): void {
    this.superheroes.push(superhero);
  }

  getSuperheroes(): Superhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
