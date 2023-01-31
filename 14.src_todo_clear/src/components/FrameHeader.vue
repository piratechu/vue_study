<template>
    <div class="todo-header">
        <input class="input" type="text" placeholder="請輸入任務名稱" />
    </div>
</template>

<script>
export default {
    name: "FrameHeader",
    data() {
        return {};
    },
    methods: {},
};
</script>

<style scoped>
.todo-header {
    background-color: #eee;
    border-radius: 6px;
    padding: 20px;
    display: flex;
    align-items: center;
}
.input {
    border: 1px solid #ddd;
    border-radius: 6px;
    height: 52px;
    padding: 0 25px;
    flex: 1;
    font-size: 18px;
    outline: none;
}
.input:focus,
.add:focus {
    outline: none;
    border-color: #719ece;
    box-shadow: 0 0 10px #719ece;
}
</style>
