//seleção dos elementos

const display = document.querySelector('#displayInput')
const botaoIgual = document.querySelector('.igual')
const botaoPonto = document.querySelector('.ponto')
const botoesNumeros = document.querySelectorAll('.num')
const botoesOperadores = document.querySelectorAll('.operador')

//Variáveis globais

let operacaoAtual = ""
let operador = null
let valorAnterior = ""
let calculando = false

// Funções
function atualizandoDisplay(){
    display.value = operacaoAtual
}
function insereNumero(evento){
    if(calculando){
        operacaoAtual = evento.target.textContent
        calculando = false
    } else{
        operacaoAtual += evento.target.textContent
    }

    atualizandoDisplay()

}

function inserePonto(){
    if(operacaoAtual.indexOf('.') === -1){
        operacaoAtual += "."
        atualizandoDisplay()
    }
}

function insereOperador(evento){
    if(operacaoAtual !== ""){
        if(!calculando) {
            if (operador !== null){
                calcula()
            }
            valorAnterior = operacaoAtual
            operacaoAtual = ''
        }
        operador = evento.target.textContent
    }
}

function calcula(){
    let resultado = null
    const operandoAnterior = parseFloat(valorAnterior)
    const operandoAtual = parseFloat(operacaoAtual)

    switch(operador){
        case '+':
            resultado = operandoAnterior + operandoAtual
            break
        case '-':
            resultado = operandoAnterior - operandoAtual
            break
        case '*':
            resultado = operandoAnterior * operandoAtual
            break
        case '/':
            resultado = operandoAnterior / operandoAtual
            break
    }
    operacaoAtual = String(resultado)
    valorAnterior = operacaoAtual
    calculando = true
    atualizandoDisplay()
}

//Eventos
botaoPonto.addEventListener('click', inserePonto)
botoesNumeros.forEach((botao) => botao.addEventListener('click', insereNumero))
botoesOperadores.forEach((botao) => botao.addEventListener('click', insereOperador))
botaoIgual.addEventListener('click', calcula)