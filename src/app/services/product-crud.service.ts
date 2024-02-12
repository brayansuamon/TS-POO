import { UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';
import { ProductHttpService2 } from './product-http2.service';
export class ProductCrudService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService2(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    //Permissions
    //Logic
    //Allow other request with generics
    this.http.otherRequest();
    //You can validate data with this decorators
    //validate(dto);
    return this.http.update(id, dto);
  }
}
