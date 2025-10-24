<template>
    <div>
        <h1>Meu App Vue</h1>
        <Contador />
        <Mensagem />
    </div>
</template>

<script>
    import Contador from './Contador.vue'
    import Mensagem from './Mensagem.vue'

    export default{
        components: {
            Contador,
            Mensagem
        }
    }
</script>