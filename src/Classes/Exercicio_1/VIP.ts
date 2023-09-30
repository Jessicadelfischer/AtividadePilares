import { Ingresso } from "./Ingresso"

export class VIP extends Ingresso {
  valorAdicional: number

  constructor(valor: number, valorAdicional: number) {
    super(valor)
    this.valorAdicional = valorAdicional
  }

  imprimeValor() {
    console.log(`Valor do VIP: ${this.valor + this.valorAdicional}`)
  }

}