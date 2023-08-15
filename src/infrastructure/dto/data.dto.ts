import {
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class DataDto {
  @IsNumber()
  @Min(1)
  @Max(100)
  id: number;

  @IsOptional()
  @IsString()
  @Length(3, 6)
  name?: string;
}
