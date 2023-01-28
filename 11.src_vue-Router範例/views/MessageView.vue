<template>
    <h3 class="content">我是 Message 內容</h3>
    <ul>
        <li v-for="msg in messageList" :key="msg.id">
            <!--propos 單一參數傳遞-->
            <Router-link
                :to="{
                    name: 'hoem.msg.detail',
                    params: {
                        id: msg.id,
                    },
                }"
            >
                {{ msg.title }}(props)</Router-link
            >
            |
            <!--透過程式化方式做設定-->
            <a href="#" @click="toMsgDetail(msg.id, msg.title)"
                >{{ msg.title }}(Programmatic push)</a
            >
        </li>
    </ul>
    <router-view></router-view>
</template>

<script>
import { useRouter } from "vue-router";
//透過 props 傳參
export default {
    name: "MessageView",
    setup() {
        const messageList = [
            { id: "001", title: "最新公告001" },
            { id: "002", title: "最新公告002" },
            { id: "003", title: "最新公告003" },
            { id: "004", title: "最新公告004" },
        ];
        const router = useRouter();
        return { messageList, router };
    },
    methods: {
        toMsgDetail(id, msg) {
            console.log(id, msg);
            this.router.push({
                name: "hoem.msg.detail",
                params: { id },
            });
            //by query
            this.router.push({
                name: "hoem.msg.detail",
                query: {
                    //傳遞參數
                    id: id,
                    title: msg,
                },
            });
        },
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
