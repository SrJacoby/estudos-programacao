<template>
    <div>
        <h2>{{ nome }}</h2>
        <p>Preço: R$ {{ preco }}</p>
    </div>
</template>

<script>
    export default{
        props:['nome', 'preco']
    }
</script>