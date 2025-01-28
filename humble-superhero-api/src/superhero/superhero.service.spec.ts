import { SuperheroService } from './superhero.service';

describe('SuperheroService', () => {
  let service: SuperheroService;

  beforeEach(() => {
    service = new SuperheroService();
  });

  it('should add and retrieve superheroes sorted by humility score', () => {
    service.addSuperhero({
      name: 'Superman',
      superpower: 'Flight',
      humilityScore: 8,
    });
    service.addSuperhero({
      name: 'Batman',
      superpower: 'Intellect',
      humilityScore: 10,
    });
    const superheroes = service.getSuperheroes();
    expect(superheroes[0].name).toBe('Batman');
    expect(superheroes[1].name).toBe('Superman');
  });
});
