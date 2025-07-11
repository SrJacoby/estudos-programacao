//Chamada assíncrona

console.log("O")

setTimeout(() => {
    console.log("E")
}, 2000)

console.log("O")

//Promise

//simples

const promessa1 = new Promise((resolve, reject) => {
  const sucesso = true

  if (sucesso) {
    resolve("Deu certo!")
  } else {
    reject("Deu erro!")
  }
});

promessa1
  .then((resposta) => console.log(resposta))
  .catch((erro) => console.error(erro))

function promessa2(){
    return new Promise((resolve) => {
        setTimeout(() => resolve("Usuário encontrado"), 1500)
    })
}

async function executar() {
    console.log("Buscando...")
    const resultado = await promessa2()
    console.log(resultado)
}

executar()