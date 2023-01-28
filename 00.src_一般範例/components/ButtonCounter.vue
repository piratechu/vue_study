<template>
<!--元件結構-->
    <button @click="count++">You clicked me {{ count }} times.</button>
</template>

<script>
//元件交互相關程式，數據、方法等等
export default {
    name: 'ButtonCounter',
    data(){
        return{
            count:0
        }
    }
}
</script>
