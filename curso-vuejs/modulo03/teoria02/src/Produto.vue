<template>
    <div>
        <h2>{{ nome }}</h2>
        <p>Preço: R$ {{ preco }}</p>
        <button @click="$emit('comprar', nome)">Comprar</button>
    </div>
</template>

<script>
    export default{
        props: ['nome', 'preco']
    }
</script>