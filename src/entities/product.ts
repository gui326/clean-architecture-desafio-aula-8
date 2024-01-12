export class Product {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    if (name === "") {
      throw new Error("Nome é obrigatório.");
    }

    this.id = id;
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public getId(): number {
    return this.id;
  }
}
