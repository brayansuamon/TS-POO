import axios from 'axios';
import { Product } from './models/product.model';

// Anonymous function that executes itself
(async () => {
  async function getProducts() {
    //We type the get to manage the responses
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );

    // Technique to force the typing in the response with casting "as"
    // const rta = await axios.get<Products[]>(
    //   'https://api.escuelajs.co/api/v1/products'
    // );
    // const data = rta.data as Product[];

    //Code
    return data;
  }

  const products = await getProducts();
  console.log(products.map((item) => `${item.id} - ${item.title}`));
})();
