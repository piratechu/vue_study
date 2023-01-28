<template>
    <div>
        <h1>{{ count }}</h1>
        <button @click="count++">點我 ++</button>
    </div>
</template>

<script>
//Composition API 響應式的使用方法
// ref vs reactive
//ref : 可以接受任何型態的資料，但是不會對物件或陣列內部的屬性變動做監聽。
//reactive : 只能接受 Object 或 Array，會對內部的屬性變動做深層的監聽，取資料時不需要 .value

//組件上使用，可以取得組件所有的方法
import { ref } from "vue";

export default {
    name: "RefData",
    //可以限制 ref取得子物件的範圍
    expose: ["AlertRef", "count"],
    setup() {
        const count = ref(0);
        const AlertRef = () => {
            console.log("Hi 透過 ref 呼叫我");
            return true;
        };
        return {
            count,
            AlertRef,
        };
    },
};
</script>
