import { Package } from "./package";

export class Order {
  private package: Package;
  private destiny: string;
  private status: "RECEIVE" | "IN_PROGRESS" | "DONE";

  constructor(id: number, packageOrder: Package, destiny: string) {
    this.package = packageOrder;
    this.destiny = destiny;
    this.status = "RECEIVE";
  }
}
