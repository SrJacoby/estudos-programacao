<template>
    <div>
        <button @click="mostrar = !mostrar">
            {{mostrar ? "Olá vue!" : "Bem-vindo ao curso!"}}
        </button>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                mostrar: true
            }
        }
    }
</script>