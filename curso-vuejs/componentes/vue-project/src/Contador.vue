<template>
    <div>
        <p>Valor atual: {{ count }}</p>
        <button @click="count++">Somar</button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                count: 0
            }
        }
    }
</script>