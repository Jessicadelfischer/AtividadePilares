export abstract class Ingresso {
  valor: number

  constructor(valor: number) {
    this.valor = valor
  }

  imprimeValor() {
    console.log(`Valor do Ingresso: ${this.valor}`)
  }

}