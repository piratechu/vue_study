<template>
    <button @click="getAxiosData">透過 aiox 抓取資料</button><br />
    <br />
    <hr />
    <!-- component 內都要使用 ref 的方式-->
    <el-table :data="students" height="90%" style="width: 100%">
        <el-table-column prop="id" label="身分證字號" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="age" label="年齡" width="80" />
        <el-table-column prop="city" label="居住城市" width="250" />
    </el-table>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
    name: "HomeView",
    setup() {
        //components 要產生
        const students = ref([]);
        return {
            students,
        };
    },
    methods: {
        getAxiosData() {
            axios
                .get("/api/students")
                .then((response) => {
                    this.students = response.data.list;
                })
                .catch((error) => {
                    console.log("axios error:", error.data);
                });
        },
    },
};
</script>
