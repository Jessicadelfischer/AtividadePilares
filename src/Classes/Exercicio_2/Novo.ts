import { Imovel } from "./Imovel"

export class Novo extends Imovel {
  private adicional: number;

  constructor(endereco: string, preco: number, adicional: number) {
    super(endereco, preco);
    this.adicional = adicional;
  }

  public getAdicional(): number {
    return this.adicional;
  }

  public setAdicional(adicional: number): void {
    this.adicional = adicional;
  }
  
  public imprimirValor(): void {
    console.log(`Valor do imóvel na planta: R$ ${this.preco + this.adicional}`);
  }
}