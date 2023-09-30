import { Imovel } from "./Imovel"

export class Velho extends Imovel {
  private desconto: number;

  constructor(endereco: string, preco: number, desconto: number) {
    super(endereco, preco);
    this.desconto = desconto;
  }

  public getDesconto(): number {
    return this.desconto;
  }

  public setDesconto(desconto: number): void {
    this.desconto = desconto;
  }
  
  public imprimirValor(): void {
    console.log(`Valor do imóvel antigo: R$ ${this.preco - this.desconto}`);
  }
}