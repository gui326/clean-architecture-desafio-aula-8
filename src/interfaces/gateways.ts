export interface IOrderGateway {
  saveOrder(order: any): Promise<boolean>;
}
