import { Product } from "../entities/product";
import { DbConnection } from "../interfaces/dbconnection";
import { IProductGateway } from "../interfaces/gateways";

export class ProductGateway implements IProductGateway {
  private repository: DbConnection;

  constructor(database: DbConnection) {
    this.repository = database;
  }

  async saveProduct(product: Product): Promise<boolean> {
    const resultBd = await this.repository.product.create({
      data: {
        name: product.getName(),
      },
    });

    return resultBd ? true : false;
  }

  async getAllProducts(): Promise<Product[]> {
    const bdProducts = await this.repository.product.findMany({});

    let products: Product[] = [];

    bdProducts.forEach((bdProduct) => {
      products.push(new Product(bdProduct.name));
    });

    return products;
  }
}
