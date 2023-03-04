<template>
    <div class="delete-all">
        <label>
            <!-- 透過 $event 抓取 checked status -->
            <!-- <input
                class="input_checkbox"
                type="checkbox"
                @click="selectedAllItem"
            /> -->
            <input class="input_checkbox" type="checkbox" v-model="isAll" />
        </label>
        <span>
            <span calss="span-font">已完成 {{ completeItemCnt }} </span> / 全部
            {{ totalItemCnt }}
        </span>
        <button class="btn-clear" @click="CleanItem">清除已完成任务</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import type { TodoItem } from "@/interface/todoitem";
import type { PropType } from "vue";

const props = defineProps({
    todoItems: {
        type: Array as PropType<TodoItem[]>,
    },
    toggleAllitemComplete: {
        type: Function,
        required: true,
    },
    delCompleteItems: {
        type: Function,
        required: true,
    },
});
//總數量
const totalItemCnt = computed(() => props.todoItems?.length);
// 透過 reduce 計算已完成數量
const completeItemCnt = computed(() =>
    props.todoItems?.reduce((acc, item) => acc + (item.isComplete ? 1 : 0), 0)
);
const isAll = computed({
    get: () => {
        return totalItemCnt.value === completeItemCnt.value &&
            totalItemCnt.value > 0
            ? true
            : false;
    },
    set: (val) => {
        props.toggleAllitemComplete(val);
    },
});

function selectedAllItem(e: any) {
    props.toggleAllitemComplete(e.target.checked);
}

function CleanItem() {
    if (confirm("確定要移除已完成的項目嗎?")) props.delCompleteItems();
}
</script>

<style scoped>
/* footer */
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
