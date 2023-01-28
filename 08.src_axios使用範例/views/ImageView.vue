<template>
    <button @click="getAxiosData">透過 aiox 抓取資料</button><br />
    <br />
    <hr />
    <div class="demo-image__lazy">
        <el-image
            v-for="img in images"
            :key="img.id"
            :src="img.avatar_url"
            style="width: 100px"
            lazy
        />
    </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
    name: "ImageView",
    setup() {
        //components 要產生
        const images = ref([]);
        return {
            images,
        };
    },
    methods: {
        getAxiosData() {
            axios
                .get("https://api.github.com/search/users?q=%22run%22")
                .then((response) => {
                    this.images = response.data.items;
                    console.log(this.images);
                })
                .catch((error) => {
                    console.log("axios error:", error.data);
                });
        },
    },
};
</script>

<style scoped>
.demo-image__lazy {
    height: 400px;
    overflow: auto;
}
.demo-image__lazy .el-image {
    display: block;
    min-height: 200px;
    margin-bottom: 10px;
}
.demo-image__lazy .el-image:last-child {
    margin-bottom: 0;
}
</style>
