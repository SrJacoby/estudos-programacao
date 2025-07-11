// DOM - Document Object Model

//Selecionar elementos

const elementoPorId = document.getElementById('meuId')

console.log(elementoPorId)

const elementoPorSeletor = document.querySelector('#meuId')

console.log(elementoPorSeletor)

const elementoPorClasse = document.getElementsByClassName('minhaClasse')

console.log(elementoPorClasse)

const elementoPorClasse2 = document.querySelector('.minhaClasse')

console.log(elementoPorClasse2)

// Manipular conteúdo de texto

const element = document.querySelector('#meuId')

console.log(element.textContent)


setTimeout(() => {
element.textContent = 'Mudei de texto'
}, 1000)

// trabalhando com atributos
const link = document.querySelector('a')

console.log(link)

link.setAttribute('href', 'https://horadecodar.com.br/cursos') //adiciona um atributo

console.log(link.getAttribute('href')) 

console.log(link.hasAttribute('target')) //verifica se há um atributo

link.removeAttribute('target') //remove um atributo

//Manipulação de classes do CSS

const elemento = document.querySelector('#meuId')

element.classList.add('novaClasse')

element.classList.remove('minhaClasse')

element.classList.toggle('outraClasse')

element.classList.toggle('outraClasse')

//Manipular o CSS
const elemento3 = document.querySelector('#meuId')

elemento3.style.color = 'blue'
elemento.style.backgroundColor = 'red'

// Navegação entre nós
const elemento4 = document.querySelector('#meuInput')

const pai = elemento4.parentNode

console.log(pai)

//Obter o primeiro filho
const primeiroFilho = pai.firstChild

console.log(primeiroFilho)

const ultimoFilho = pai.lastChild

console.log(ultimoFilho)

// Manipulação de estrutura do DOM
const novoElemento = document.createElement('div')

console.log(novoElemento)

novoElemento.textContent = "Luis Suárez é craque"

document.body.appendChild(novoElemento)

document.body.insertBefore(novoElemento, pai)

document.body.removeChild(elementoPorId)

//Eventos

//click

const botao = document.querySelector('button')
botao.addEventListener('click', function(){
    console.log('Botão clicado!')
})

// mouse
const elemento5 = document.querySelector('#meuFormulario')
elemento5.addEventListener('mouseover', function(){
    console.log('Passei o mouse!')
})

//teclado

const campoInput = document.querySelector('#meuInput')

campoInput.addEventListener('keydown', function(){
    console.log('Tecla pressionada!')
})

// formulário
const form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log('Formulário enviado!')
})

//propagação de eventos
document.querySelector('#elementoPai').addEventListener('click', function(){
    console.log('Clique capturado no pai')
})

document.querySelector("#elementoFilho").addEventListener('click', function(event){
    //event.stopPropagation()
    console.log('Elemento filho')
})

document.querySelector('#meuLink').addEventListener('click', function(event){
    event.preventDefault()

    console.log('clicou no link!')
})

//delegação de eventos
document.querySelector('#elementoPai').addEventListener('click', function(event){
    if(event.target.matches('.classeDosFilhos')){
        console.log('Evento delegado para o filho')
    }
})

