import { ItemPackage } from "./itemPackage";

export class Package {
  private itensPackage: ItemPackage[];

  constructor(itensPackage: ItemPackage[]) {
    this.itensPackage = itensPackage;
  }
}
