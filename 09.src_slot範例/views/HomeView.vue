<template>
    <!--如果元件的中間傳入東西，元件會不知道要做甚麼，所以可以透過 slot 保留一個坑給外部使用-->
    <!--目前用途屬於默認插槽-->
    <ComSlotBasic title="美食" category="foods" :goodsData="goods">
        <h1>熱銷產品</h1>
        <img src="./assets/bbq.jpg" style="width: 10%"
    /></ComSlotBasic>
    <ComSlotBasic
        title="遊戲"
        category="games"
        :goodsData="goods"
    ></ComSlotBasic>
    <ComSlotBasic
        title="書籍"
        category="books"
        :goodsData="goods"
    ></ComSlotBasic>
</template>

<script>
import { ref } from "vue";
import userData from "./assets/goods.json";
import ComSlotBasic from "@/components/ComSlotBasic.vue";

export default {
    name: "HomeView",
    components: { ComSlotBasic },
    setup() {
        const goods = ref([...userData]); //將 JSON 解構
        return {
            goods,
        };
    },
};
</script>
<style>
img {
    width: 50%;
    height: 50%;
}
</style>
