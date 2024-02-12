import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  Length,
  validateOrReject,
} from 'class-validator';
import { AccessType, Category } from '../models/category.model';

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}

//Decorators, if start with isUrl is a function and if start with IsString is a property
export class CreateCategoryDto implements ICreateCategoryDto {
  // ! is to skip validation
  @IsNotEmpty()
  @Length(3, 50)
  name!: string;

  //Add the decorator before the expression
  @IsUrl()
  @IsNotEmpty()
  image!: string;
  creationAt!: Date;
  updatedAt!: Date;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'a';
    dto.image = 'http://example.com';
    await validateOrReject(dto);
  } catch (error) {
    console.error(error);
  }
})();
