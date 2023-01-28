<template>
    <h1 class="content">我是 HOME 頁面(嵌套 News & Message的連結元件)</h1>
    <el-row :gutter="20">
        <el-col :span="10">
            <router-link to="/home/news">
                <el-button size="large" round> News </el-button></router-link
            >
        </el-col>
        <el-col :span="10">
            <router-link to="/home/message">
                <el-button size="large" round> Message </el-button></router-link
            >
        </el-col>
    </el-row>
    <el-row>
        <el-col>
            <router-view></router-view>
            <!--此物件的資料會被緩存保留，寫法與之前直接使用 keepAlive 標籤不同。-->
            <!-- <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </router-view> -->
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "HomeView",
    setup() {
        return {};
    },
};
</script>

<style scoped>
.content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
}
</style>
