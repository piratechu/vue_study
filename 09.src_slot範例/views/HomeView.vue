<template>
    <button @click="getAxiosData">透過 aiox 抓取資料</button><br />
    <!--如果元件的中間傳入東西，元件會不知道要做甚麼，所以可以透過 slot 保留一個坑給外部使用-->
    <!--目前用途屬於默認插槽-->
    <ComSlotBasic title="美食" category="foods" :goodsData="goods">
        <img src="../assets/bbq.jpg"
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
import { ref, onMounted } from "vue";
import axios from "axios";
import ComSlotBasic from "@/components/ComSlotBasic.vue";

export default {
    name: "HomeView",
    components: { ComSlotBasic },
    setup() {
        const goods = ref([]);
        onMounted(() => {
            axios
                .get("/api/goods")
                .then((response) => {
                    goods.value = response.data;
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log("axios error:", error);
                });
        });
        return {
            goods,
        };
    },
    methods: {
        getAxiosData() {
            axios
                .get("/api/goods")
                .then((response) => {
                    this.goods = response.data;
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log("axios error:", error.data);
                });
        },
    },
};
</script>
<style>
img {
    width: 50%;
    height: 50%;
}
</style>
