<template>
    <div id="app">
        <el-row :gutter="20" class="el-row">
            <el-col :span="5">
                <router-link to="/">
                    <el-button size="large" round>
                        Home
                    </el-button></router-link
                >
            </el-col>
            <el-col :span="5">
                <el-button size="large" round
                    ><router-link to="/about"> About </router-link></el-button
                >
            </el-col>
            <el-col :span="5">
                <el-button size="large" round
                    ><router-link to="/teleport">
                        Teleport
                    </router-link></el-button
                >
            </el-col>
            <el-col :span="5">
                <el-button size="large" round
                    ><router-link to="/suspense">
                        suspense
                    </router-link></el-button
                >
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "App",
    setup() {
        return {};
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
