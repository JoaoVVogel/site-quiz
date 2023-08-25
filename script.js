const botaoStart = document.querySelector('.botao-start');
const mensagem = document.querySelector('.mensagem');
const botaoFechar = document.querySelector('.fechar-info');
const botaoContinuar = document.querySelector('.continuar-info');
const main = document.querySelector('.main');
const sectionQuiz = document.querySelector('.section-quiz');

botaoStart.onclick = () => {
    mensagem.classList.add('ativo');
    main.classList.add('ativo');
}

botaoFechar.onclick = () => {
    mensagem.classList.remove('ativo');
    main.classList.remove('ativo');
}

botaoContinuar.onclick = () => {
    sectionQuiz.classList.add('ativo');
    mensagem.classList.remove('ativo');
    main.classList.remove('ativo');
}