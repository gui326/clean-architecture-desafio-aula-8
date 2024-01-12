import { Product } from "./product";

export class ItemPackage {
  private id: number;
  private product: Product;
  private quantity: number;
  private type_unity: "kg" | "un";

  constructor(
    id: number,
    product: Product,
    quantity: number,
    type_unity: "kg" | "un"
  ) {
    if (quantity <= 0) {
      throw new Error("Quantidade deve ser maior que zero.");
    }

    this.id = id;
    this.product = product;
    this.quantity = quantity;
    this.type_unity = type_unity;
  }
}
