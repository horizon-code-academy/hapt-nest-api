import {
  IsMongoId,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateSubjectDto {
  @IsMongoId()
  @IsOptional()
  _id?: string;
  @IsOptional()
  @IsString()
  @MaxLength(25)
  @MinLength(2)
  label: string;
  @IsOptional()
  @IsString()
  @MaxLength(10)
  @MinLength(2)
  field: string;
  @IsOptional()
  @IsNumber()
  @IsPositive()
  nb_hour: number;
  @IsOptional()
  @IsNumber()
  @IsPositive()
  price_hour: number;
  @IsOptional()
  @IsString()
  description: string;
}
