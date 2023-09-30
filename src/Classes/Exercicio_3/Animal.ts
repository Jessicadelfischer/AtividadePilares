export abstract class Animal {
  private nome: string
  private cor: string
  private tamanho: number
  constructor(nome: string, cor: string, tamanho: number) {
    this.nome = nome
    this.cor = cor
    this.tamanho = tamanho
  }
  public getNome(): string {
    return this.nome
  }
  public setNome(nome: string): void {
    this.nome = nome
  }
  public comer(): void {
    console.log(`${this.nome} está comendo.`)
  }
  public dormir(): void {
    console.log(`${this.nome} está dormindo.`)
  }
  public pular(): void {
    console.log(`${this.nome} está pulando.`)
  }
}