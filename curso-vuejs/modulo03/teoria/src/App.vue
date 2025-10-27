<!--Passando dados do componente pai para o filho (props) -->

<template>
  <div>
    <h1>Loja Virtual</h1>
    <Produto nome="Camisa do Grêmio" preco="199.90"/>
  </div>
</template>

<script>
  import Produto from './Produto.vue';

  export default{
    components: {Produto}
  }
</script>