import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: Category['id']; //To specify that is linked with the same type of Category Id
}

// type example = Pick<Product, 'color' | 'description'>;

export interface UpdateProductDto extends Partial<CreateProductDto> {}

// type example2 = Required<Product>;

// export interface FindProductDto
//   extends Readonly<Partial<Omit<Product, 'tags'>>> {
//   readonly tags: ReadonlyArray<string>;
// }

// type example3 = Readonly<Product>;
