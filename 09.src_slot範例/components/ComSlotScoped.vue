<template>
    <div class="card">
        <h1>
            <slot name="product">這裡的位置擺放商品名稱(name:product)</slot>
        </h1>
        <hr />
        <h2>
            <slot name="price">這裡的位置把放商品價格(name:price)</slot>
        </h2>
        <slot>我沒有名字(default)</slot>
        <hr />
        <div>
            <label>數量{{ quantity }}</label>
            <select name="quantity" id="quantity" v-model="quantity">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
        <p class="result">
            <slot name="result" :quantity="quantity"></slot>
        </p>
        <hr />
        <ul>
            <li v-for="item in items" :key="item">
                <slot name="item" v-bind="item" />
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        const quantity = ref(0);
        const items = [
            { body: "Scoped Slots Guide", username: "Evan You", likes: 20 },
            { body: "Vue Tutorial", username: "Natalia Tepluhina", likes: 10 },
        ];
        return {
            quantity,
            items,
        };
    },
};
</script>

<style scoped>
.card {
    text-align: center;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid grey;
    border-radius: 6px;
}
.result {
    padding: 20px;
    background: #ededed;
}
</style>
