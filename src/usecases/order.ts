import { Order } from "../entities/order";
import { Package } from "../entities/package";
import { IOrderGateway } from "../interfaces/gateways";

export class OrderUseCase {
  static async createOrder(
    selectedPackage: Package,
    destiny: string,
    OrderGateway: IOrderGateway
  ): Promise<boolean> {
    if (!selectedPackage) throw new Error("Pacote não encontrado.");

    const order = new Order(1, selectedPackage, destiny);
    await OrderGateway.saveOrder(order);
    return true;
  }
}
