import { ItemPackage } from "./itemPackage";

export class Package {
  private id: number;
  private itensPackage: ItemPackage[];

  constructor(id: number, itensPackage: ItemPackage[]) {
    this.id = id;
    this.itensPackage = itensPackage;
  }
}
