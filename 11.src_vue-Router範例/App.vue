<template>
    <button @click="back">後退</button>
    <button @click="forward">前進</button>
    <button @click="go">橫跨歷史</button>
    <button @click="logoff">登出</button>
    <el-row :gutter="20" class="el-row">
        <el-col :span="5">
            <router-link to="/home">
                <el-button size="large" round> Home </el-button></router-link
            >
        </el-col>
        <el-col :span="15">
            <el-button size="large" round
                ><router-link to="/about"> About </router-link></el-button
            >
        </el-col>
    </el-row>
    <el-row>
        <el-col>
            <router-view></router-view>
        </el-col>
    </el-row>
</template>

<script>
import { useRouter } from "vue-router";

export default {
    name: "App",
    setup() {
        const router = useRouter();
        return { router };
    },
    methods: {
        back() {
            this.router.back();
        },
        forward() {
            this.router.forward();
        },
        go() {
            this.router.go(-3);
        },
        logoff() {
            localStorage.setItem("auth", "false");
        },
    },
    mounted() {
        console.log(this);
    },
};
</script>

<style scoped>
.demo-radius .radius {
    height: 40px;
    width: 70%;
    border: 1px solid var(--el-border-color);
    border-radius: 0;
    margin-top: 20px;
}

.el-row {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
}
</style>
