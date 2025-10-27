<template>
    <div>
        <h2>Lista de Produtos</h2>

        <div v-for="(produto, index) in produtos" :key="index" class="produto">
            <h3>{{ produto.nome }}</h3>
            <p>Preço: R$ {{ produto.preco.toFixed(2) }}</p>
            <button @click="comprar(produto)">Comprar</button>
        </div>
    </div>
</template>

<script>
    export default{
        props:['produtos'],
        emits: ['comprar-produto'],
        methods: {
            comprar(produto){
                this.$emit('comprar-produto', produto)
            }
        }
    }
</script>