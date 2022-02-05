import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
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
  nb_hour: number;
  @IsNotEmpty()
  @IsNumber()
  price_hour: number;
  @IsOptional()
  @IsString()
  description: string;
}
