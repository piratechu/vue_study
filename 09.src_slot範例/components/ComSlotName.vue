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
    </div>
</template>

<script>
export default {
    setup() {
        return {};
    },
};
</script>
<style>
.card {
    text-align: center;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid grey;
    border-radius: 6px;
}
</style>
