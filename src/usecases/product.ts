import { Product } from "../entities/product";
import { IProductGateway } from "../interfaces/gateways";

export class ProductUseCases {
  static async createProduct(
    name: string,
    productGateway: IProductGateway
  ): Promise<boolean> {
    if (!name) return Promise.reject("Nome inválido.");

    const newProduct = new Product(name);
    const resultProduct = await productGateway.saveProduct(newProduct);
    return resultProduct;
  }

  static async getAllProducts(
    productGateway: IProductGateway
  ): Promise<Product[]> {
    const products = await productGateway.getAllProducts();

    return products;
  }
}
