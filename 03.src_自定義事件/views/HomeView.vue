<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <!--通過父組件給子組件傳遞函數類型 props 做子組件資料傳遞至父組件-->
        <CompanyData :getCompanyName="getCompanyName"></CompanyData>
        <!--透過子組件綁定自定義事件 emits 實現，子組件傳遞給父組件 -->
        <!--也可以在物件定義 ref 取得子物件的資料-->
        <StaffData ref="StaffData" @my-event="handleMyEvent"></StaffData>
        <StaffCompositionData @my-event="handleMyEvent"></StaffCompositionData>
    </div>
</template>

<script>
import CompanyData from "@/components/CompanyData.vue";
import StaffData from "@/components/StaffData.vue";
import StaffCompositionData from "@/components/StaffCompositionData.vue";

export default {
    name: "HomeView",
    components: { StaffData, CompanyData, StaffCompositionData },
    setup() {
        return {
            msg: "$emit function Demo(我是父組件)",
        };
    },
    methods: {
        //透過 function props 傳遞的方式取得子組件的資料
        getCompanyName(name) {
            console.log("父組件收到(props):" + name);
        },
        //建立一個自己的事件
        handleMyEvent(name) {
            console.log("事件被調用($emit)" + name);
            console.log(
                "透過 ref 取得子物件(year)" + this.$refs.StaffData.year
            );
        },
    },
};
</script>

<style scoped>
.home {
    background-color: grey;
}
</style>
