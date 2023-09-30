import { Ingresso } from "./Ingresso"

export class Camarote extends Ingresso {
  valorAdicional: number

  constructor(valor: number, valorAdicional: number) {
    super(valor)
    this.valorAdicional = valorAdicional
  }

  imprimeValor() {
    console.log(`Valor do Camarote: ${this.valor + this.valorAdicional}`)
  }

}