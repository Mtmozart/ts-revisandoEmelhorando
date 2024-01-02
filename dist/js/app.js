import { NegociacaoController } from "./controllers/negociaco-controller.js"; // sempre por o js, o react faz por de baixo
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.adiciona();
});
