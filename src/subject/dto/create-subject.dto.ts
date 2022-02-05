import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateSubjectDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  @MinLength(2)
  label: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  @MinLength(2)
  field: string;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  nb_hour: number;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price_hour: number;
  @IsOptional()
  @IsString()
  description: string;
}
