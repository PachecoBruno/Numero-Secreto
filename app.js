let listaDeNumerosSorteados = [];
let NumeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exbiriMensgaemIncial() {
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', `Escolha um número de 1 a ${NumeroLimite}`);
}

exbiriMensgaemIncial();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* NumeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == NumeroLimite){
        listaDeNumerosSorteados=[];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value= '';
    
}


function verificarChute() {
    let chute= document.querySelector('input').value
    console.log(chute == numeroSecreto);
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'acertou !');
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número com ${tentativas} ${palavraTentativa}!!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
            if(chute > numeroSecreto){
                exibirTextoNaTela('p', 'Número secreto é menor');

            }else{
                exibirTextoNaTela('p', 'O número secreto é maior');
            }
            tentativas++;
            limparCampo();
        }
    }

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
   exbiriMensgaemIncial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
    
}