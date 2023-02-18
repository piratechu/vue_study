<template>
    <div class="delete-all">
        <label>
            <input class="input_checkbox" type="checkbox" />
        </label>
        <span> <span calss="span-font">已完成 ?? </span> / 全部 ?? </span>
        <button class="btn-clear">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: "FrameFooter",
    data() {
        return {};
    },
};
</script>
<style scoped>
.delete-all {
    background-color: #eee;
    border-radius: 6px;
    padding: 20px;
    display: flex;
    position: relative;
    align-items: center;
}
.btn-clear {
    margin-top: 3px;
    border: none;
    background-color: #f44336;
    color: white;
    padding: 10px;
    position: absolute;
    border-radius: 6px;
    right: 10px;
    cursor: pointer;
}

.span-font {
    font-size: 18px;
}
.input_checkbox {
    width: 25px;
    height: 25px;
}
</style>
