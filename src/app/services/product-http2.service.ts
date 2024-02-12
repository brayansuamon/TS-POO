import { Product } from '../models/product.model';
import { BaseHttpService } from './base-http.service';

//Extends allow to add more methods to  the function
export class ProductHttpService2 extends BaseHttpService<Product> {
  otherRequest() {
    //I can access to the url for protected in the constructor of httpservice
    this.url;
    //Code
  }
}
