<template>
    <h3 class="content">我是News 內容</h3>
    <ul>
        <li v-for="news in messageList" :key="news.id">
            <!--透過 query 的方式傳參數，新版本採用物件寫法。舊版本還有字串寫法-->
            <RouterLink
                :to="`/home/news/detail/${news.id}/?id=${news.id}&title=${news.title}`"
                >字串符寫法({{ news.id }})</RouterLink
            >
            |
            <Router-link
                :to="{
                    name: 'home.news.detail',
                    params: { id: news.id },
                    query: { id: news.id, title: news.title },
                }"
            >
                {{ news.title }}</Router-link
            >
        </li>
        <!--keep alive 測試用-->
        <!-- name:
        <input type="text" v-model="name" /> -->
    </ul>
    <router-view></router-view>
</template>

<script>
export default {
    name: "NewsView",
    setup() {
        const messageList = [
            { id: "001", title: "Hot News 001" },
            { id: "002", title: "Hot News 002" },
            { id: "003", title: "Hot News 003" },
            { id: "004", title: "Hot News 004" },
        ];
        let name = "";
        return {
            messageList,
            name,
        };
    },
    beforeUnmount() {
        console.log("newsView 將被銷毀");
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
