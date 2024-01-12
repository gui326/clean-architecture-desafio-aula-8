import { ItemPackage } from "../entities/itemPackage";
import { Package } from "../entities/package";
import { Product } from "../entities/product";

export class PackageUseCase {
  static async createPackage(
    itensPackages: ItemPackage[],
    packageGateway: any
  ): Promise<boolean> {
    if (itensPackages.length === 0) throw new Error("Quantidade inválida.");

    const newPackage = new Package(1, itensPackages);
    return true;
  }
}
