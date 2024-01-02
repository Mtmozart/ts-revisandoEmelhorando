import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController{
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  constructor(){
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor')
  }

  
  adiciona(){
    const ex = /-/g;
    const date = new Date(this.inputData.value.replace(ex, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value)

    const negociaco = new Negociacao(date, quantidade, valor );

    console.log(negociaco)
  }


}