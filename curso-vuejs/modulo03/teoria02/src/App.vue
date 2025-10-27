<template>
    <div>
        <h1>Loja Virtual</h1>
        <Produto nome="Camisa do Grêmio" preco="199.90" @comprar="adicionarCarrinho" />
        <p v-if="itemSelecionado">Você comprou: {{ itemSelecionado }}</p>
    </div>
</template>

<script>
    import Produto from './Produto.vue';

    export default{
        components: {Produto},
        data(){
            return{
                itemSelecionado: ''
            }
        },
        methods: {
            adicionarCarrinho(item){
                this.itemSelecionado = item
            }
        }
    }
</script>