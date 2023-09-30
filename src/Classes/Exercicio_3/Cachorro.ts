import { Animal } from './Animal'
export class Cachorro extends Animal {
  constructor(nome: string, cor: string, tamanho: number) {
    super(nome, cor, tamanho)
  }
  public latir(): void {
    console.log(`${this.getNome()} está latindo para pular.`)
    this.pular()
  }

  
}