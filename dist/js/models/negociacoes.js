export class Negociacoes {
    constructor() {
        this.negociacoes = []; //pode ser Negociacao[]
    }
    adicionar(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //método de seguranã do ts - somente para leitura
    lista() {
        //spread operator, este método é para garantir que a lista original n seja alterada [...this.negociacoes]
        return this.negociacoes;
    }
}
