import axios from 'axios';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export class BaseHttpService<TypeClass> {
  private data: TypeClass[] = [];

  constructor(private url: string) {}

  async getAll(): Promise<TypeClass[]> {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }
}

// //Mention that the type for this class is an string
// const service = new BaseHttpService<number>();
// service.data;

// const service = new BaseHttpService<string>();
// service.data;
// service.getAll();

//Define that the array return categories
// const service2 = new BaseHttpService<Category>();
// service2.getAll();

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);
  const rta = await productService.getAll();
  console.log(rta.length, 'rta products');
  console.log('---'.repeat(10));

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);
  const rta2 = await categoryService.getAll();
  console.log(rta2.length, 'rta categories');
})();
