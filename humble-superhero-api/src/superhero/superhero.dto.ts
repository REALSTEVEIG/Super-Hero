import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, Max } from 'class-validator';

export class SuperheroDto {
  @ApiProperty({
    example: 'Superman',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Flight',
  })
  @IsString()
  superpower: string;

  @ApiProperty({
    example: 8,
  })
  @IsInt()
  @Min(1)
  @Max(10)
  humilityScore: number;
}
