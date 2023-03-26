import dataJson from '../.data/data.json';

type Product = (typeof dataJson)[0];

class ProductService {
  timerId: NodeJS.Timeout | undefined;
  delay = 100;
  products: Product[] = [];

  constructor(delay?: number) {
    this.products = dataJson;
    this.delay = delay || 100;
  }
  getCategory(url: string): Promise<Product[]> {
    return new Promise((resolve) => {
      this.timerId = setTimeout(() => {
        const records = this.products
          .reduce((accumulator, product) => {
            if (product.category === url) {
              return [...accumulator, product];
            }
            return accumulator;
          }, [] as typeof dataJson)
          .sort((x, y) => (x === y ? 0 : x ? -1 : 1));
        resolve(records);
      }, this.delay);
    });
  }

  getOneProduct(slug: string): Promise<Product | undefined> {
    return new Promise((resolve) => {
      this.timerId = setTimeout(() => {
        const record = this.products.find((product) => product.slug === slug);
        resolve(record);
      }, this.delay);
    });
  }

  clearTimerId() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }
}

const productService = new ProductService(1000);

export default productService;
