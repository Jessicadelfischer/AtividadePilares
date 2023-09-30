import { Animal } from "./Animal"

export  class Cavalo extends Animal {
  constructor(nome: string, cor: string, tamanho: number) {
    super(nome, cor, tamanho)
  }
  public correr(): void {
    console.log(`${this.getNome()} está correndo, para pular.`)
    this.pular()   
  }
}