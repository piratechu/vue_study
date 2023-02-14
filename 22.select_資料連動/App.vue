<template>
    <!--select districts 縣市-->
    <select v-model="cityIndex">
        <option value="">請選擇</option>
        <option v-for="(city, index) in cities" :key="index" :value="city">
            {{ city }}
        </option>
    </select>
    <select v-model="disIndex">
        <option value="">請選擇</option>
        <option v-for="(dis, index) in district" :key="index" :value="index">
            {{ dis.zip }} - {{ dis.name }}
        </option>
    </select>
    {{ disIndex }}
</template>

<script>
import { ref, computed, watch } from "vue";

const postData = require("@/assets/TaiwanPost.json");

export default {
    setup() {
        let cityIndex = ref("台北市");
        let disIndex = ref("");
        const cities = computed(() => {
            return postData.map((city) => city.name);
        });
        const district = computed(() => {
            let disArr = postData.filter((dis) => {
                if (cityIndex.value === dis.name) return dis.districts;
            });
            return disArr[0].districts;
        });
        watch(cityIndex, (nVal, oVal) => {
            //console.log(nVal);
            if (nVal !== oVal) disIndex.value = "";
        });

        return {
            postData,
            cities,
            cityIndex,
            district,
            disIndex,
        };
    },
};
</script>

<style scoped>
select {
    display: inline-block;
    font-size: 20px;
    width: 300px;
    position: relative;
    vertical-align: middle;
    padding: 0;
    overflow: hidden;
    background-color: #fff;
    color: #555;
    border: 1px solid #aaa;
    text-shadow: none;
    transition: box-shadow 0.25s ease;
    z-index: 2;
}
select:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}
select:focus {
    outline: none;
}
</style>
