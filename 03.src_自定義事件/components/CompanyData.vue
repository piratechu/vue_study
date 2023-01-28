<template>
    <div class="company">
        <h2>公司名稱 : {{ name }}</h2>
        <h2>公司地址 : {{ address }}</h2>
        <button @click="sendCompyNameToView">
            子組件傳遞資料給父組件(props)
        </button>
    </div>
</template>

<script>
export default {
    name: "CompanyData",
    props: ["getCompanyName"],
    setup() {
        return {
            name: "友達光電 AUO.TW",
            address: "桃園龍潭",
        };
    },
    methods: {
        sendCompyNameToView() {
            this.getCompanyName(this.name);
        },
    },
};
</script>

<style scoped>
.company {
    background-color: aqua;
    padding: 5px;
    margin-top: 30px;
}
</style>
