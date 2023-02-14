<template>
    <div class="card">
        <div class="card-header">
            <span>{{ title }}</span>
            <button class="button" text>Operation button</button>
        </div>
        <!--利用巢狀迴圈抓取相關的類別資料-->
        <div v-for="o in goodsData" :key="o" class="text item">
            <div v-if="o.name === category">
                <div v-for="d in o.category" :key="d">
                    {{ d }}
                </div>
                <!--定義一個插槽，等組件使用者進行填寫，插槽出口處-->
                <slot>沒有定義名稱，就會在這裡直接使用這個插槽</slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ComSlotBasic",
    props: ["title", "goodsData", "category"],
    setup() {
        return {};
    },
    mounted() {
        console.log(this.goodsData[0]);
    },
};
</script>

<style scoped>
.card {
    text-align: center;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid grey;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    border-radius: 6px;
}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 480px;
}
</style>
