<template>
  <div>
    <h1>Loja Virtual do Grêmio</h1>

    <ListaProdutos
      :produtos="lista"
      @comprar-produto="adicionarCarrinho"
    />

    <p v-if="itemSelecionado">
      Você comprou: {{ itemSelecionado.nome }} (R$ {{ itemSelecionado.preco.toFixed(2) }})
    </p>

  </div>
</template>

<script>
  import ListaProdutos from './ListaProdutos.vue';
  
  export default{
    components: {ListaProdutos},
    data() {
      return {
        lista: [
          {nome: 'Camisa do Grêmio', preco: 199.90},
          {nome: 'Boné do Grêmio', preco: 79.90},
          {nome: 'Copo do Grêmio', preco: 29.90},
        ],
        itemSelecionado: null
      }
    },
    methods: {
      adicionarCarrinho(produto){
        this.itemSelecionado = produto
      }
    }
  }
</script>