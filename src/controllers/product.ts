import { ProductAdapter } from "../adapters/product";
import { Product } from "../entities/product";
import { ProductGateway } from "../gateways/product";
import { DbConnection } from "../interfaces/dbconnection";
import { ProductUseCases } from "../usecases/product";

export class ProductController {
  static async createProduct(
    name: string,
    dbConnection: DbConnection
  ): Promise<boolean> {
    const productGateway = new ProductGateway(dbConnection);
    const resultProduct = await ProductUseCases.createProduct(
      name,
      productGateway
    );

    return resultProduct;
  }

  static async getAllProducts(dbConnection: DbConnection): Promise<string> {
    const productGateway = new ProductGateway(dbConnection);
    const allProducts = await ProductUseCases.getAllProducts(productGateway);

    const adapted = ProductAdapter.adaptJSONProducts(allProducts);
    return adapted;
  }
}
