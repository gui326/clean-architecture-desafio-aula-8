import { Product } from "../entities/product";

export class ProductAdapter {
  static adaptJSONProducts(products: Product[] | null): string {
    if (!products) return JSON.stringify({});

    const productsJSON = products.map((product) => {
      return {
        name: product.getName(),
      };
    });

    return JSON.stringify(productsJSON);
  }
}
