import { Negociacao } from "./negociacao.js";

export class Negociacoes {

  private negociacoes: Array<Negociacao> = []  //pode ser Negociacao[]
  

  public adicionar(negociacao: Negociacao){
   this.negociacoes.push(negociacao)
  }
  //método de seguranã do ts - somente para leitura
  public lista():  readonly  Negociacao[]{ //public lista(): ReadonlyArray<Negociacao>{
    //spread operator, este método é para garantir que a lista original n seja alterada [...this.negociacoes]
    return this.negociacoes;
  }

}


