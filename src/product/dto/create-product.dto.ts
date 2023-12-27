import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'name is required' })
  @MaxLength(255)
  name: string;

  @IsNumber()
  price: number;

  @MaxLength(1000)
  description: string;

  @IsString()
  image: string;

  @IsString()
  brand: string;
}
