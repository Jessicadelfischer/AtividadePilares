import { Animal } from "./Animal"

export class Gato extends Animal {
  constructor(nome: string, cor: string, tamanho: number) {
    super(nome, cor, tamanho)
  }
  public miar(): void {
    console.log(`${this.getNome()} está miando, porque quer comida. `)
    this.comer()
  }
}