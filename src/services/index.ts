import dataJson from '../.data/data.json';

type Product = {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
};

class ProductService {
  timerId: NodeJS.Timeout | undefined;
  delay = 100;
  products: Product[] = [];

  constructor(delay?: number) {
    this.products = dataJson as Product[];
    this.delay = delay || 100;
  }
  async getCategory(url: string): Promise<Product[]> {
    const records = await new Promise<Product[]>((resolve) => {
      this.timerId = setTimeout(() => {
        const records = this.products
          .reduce((accumulator, product) => {
            if (product.category === url) {
              return [...accumulator, product];
            }
            return accumulator;
          }, [] as Product[])
          .sort((x, y) => (x === y ? 0 : x ? -1 : 1));
        resolve(records);
      }, this.delay);
    });
    // turn off timer...
    this.clearTimerId();
    return records;
  }

  async getOneProduct(slug: string): Promise<Product | undefined> {
    const record = await new Promise<Product | undefined>((resolve) => {
      this.timerId = setTimeout(() => {
        const record = this.products.find((product) => product.slug === slug);
        resolve(record);
      }, this.delay);
    });
    // turn off timer...
    this.clearTimerId();
    return record;
  }

  clearTimerId() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }
}

const productService = new ProductService(1000);

export default productService;
