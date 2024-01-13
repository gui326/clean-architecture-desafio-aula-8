export class Product {
  private name: string;

  constructor(name: string) {
    if (name === "") {
      throw new Error("Nome é obrigatório.");
    }

    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
