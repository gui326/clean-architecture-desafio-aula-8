import { Product } from "../entities/product";

export interface IOrderGateway {
  saveOrder(order: any): Promise<boolean>;
}

export interface IProductGateway {
  saveProduct(product: Product): Promise<boolean>;
  getAllProducts(): Promise<Product[]>;
}
