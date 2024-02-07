import { faker } from '@faker-js/faker';
import { ProductMemoryService } from './services/product-memory.service';

const productService = new ProductMemoryService();

productService.create({
  title: 'product 1',
  price: 100,
  categoryId: 12,
  description: 'bla bla',
  images: [],
  creationAt: faker.date.past(),
  updatedAt: faker.date.recent(),
});

console.log(productService.getAll());
const products = productService.getAll();
const productId = products[0].id;

productService.updateProduct(productId, {
  title: 'cambiar nombre',
});

const rta = productService.findOne(productId);
console.log(rta);
