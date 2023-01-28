<template>
    <div class="staff">
        <h2>姓名: {{ name }}</h2>
        <h2>年資: {{ year }}</h2>
        <!-- <button @click="sendStaffNaneToView"> -->
        <button @click="customEvent(name)">
            子組件傳遞資料給父組件(emit)/Composition Api
        </button>
        <button @click="customEvent()">
            子組件傳遞資料給父組件(emit)/Composition Api(校驗，無傳值)
        </button>
    </div>
</template>

<script>
export default {
    name: "StaffData",
    //可以用聲明的方式進行 emits
    //composition api 在 setup
    setup(props, { emit }) {
        const customEvent = (name) => {
            emit("myEvent", name);
        };
        return {
            customEvent,
            name: "小三",
            year: 10,
        };
    },
    //可以透過物件方式增加事件的校驗
    emits: {
        //不行校驗
        // myEvent: null,
        //進行校驗，會在 console 顯示錯誤
        myEvent: (name) => {
            if (name) {
                return true;
            } else {
                console.log("子物件檢驗，無傳入值");
                return false;
            }
        },
    },
};
</script>

<style scoped>
.staff {
    background-color: blueviolet;
    padding: 5px;
    margin-top: 30px;
    margin-bottom: 20px;
}
</style>
