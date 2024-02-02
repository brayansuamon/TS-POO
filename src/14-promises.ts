import axios from 'axios';

// Anonymous function that executes itself
(async () => {
  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      //Specify the value type of boolean
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }

  // All of these request return a promise
  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.log('---'.repeat(10));
  const rta = await delay(300);
  console.log(rta);
  const products = await getProducts();
  console.log(products.data);
  const productsv2 = await getProductsAsync();
  console.log(productsv2);
})();
