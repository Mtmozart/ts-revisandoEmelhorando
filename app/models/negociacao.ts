export class Negociacao {
 /*   private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }*/

    //método ts de fazer as coisas
    constructor(
        //se eu dizer public readonly deixa o método como se fosse private e acessivel pelo get
        private _data: Date,public readonly quantidade: number, public readonly valor: number) {}

    get data():Date {
        const data = new Date(this._data.getTime())
        return data
    }
 
    get volume():number {
        return this.quantidade * this.valor;
    }
}