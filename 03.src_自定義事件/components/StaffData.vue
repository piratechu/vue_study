<template>
    <div class="staff">
        <h2>姓名: {{ name }}</h2>
        <h2>年資: {{ year }}</h2>
        <button @click="sendStaffNaneToView">
            子組件傳遞資料給父組件(emit)/Option Api
        </button>
    </div>
</template>

<script>
export default {
    name: "StaffData",
    //可以用聲明的方式進行 emits
    setup() {
        return {
            name: "小三",
            year: 10,
        };
    },
    methods: {
        //透過子組件的事件進行觸發&監聽事件
        sendStaffNaneToView() {
            this.$emit("myEvent", this.name);
        },
    },
    //可以透過物件方式增加事件的校驗
    // emits: {
    //     //不行校驗
    //     // myEvent: null,
    //     //進行校驗，會在 console 顯示錯誤
    //     myEvent: (name) => {
    //         if (name) return true;
    //         else return false;
    //     },
    // },
};
</script>

<style scoped>
.staff {
    background-color: burlywood;
    padding: 5px;
    margin-top: 30px;
    margin-bottom: 20px;
}
</style>
