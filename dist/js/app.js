import { NegociacaoController } from "./controllers/negociaco-controller.js"; // sempre por o js, o react faz por de baixo
import { NegociacaoView } from "./views/negociacao-view.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.adiciona();
});
const negociacaoView = new NegociacaoView();
const template = negociacaoView.template();
console.log(template);
