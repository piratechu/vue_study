<template>
    <ul class="todo-main">
        <li>
            <label>
                <input
                    class="input_checkbox"
                    type="checkbox"
                    :checked="todoItem.isComplete"
                    @click="clickCheckBox(todoItem.id)"
                />
                <span class="span-font">{{ todoItem.item }}</span>
            </label>
            <button @click="DelOneItem(todoItem.id)">删除</button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { PropType } from "vue";
import type { TodoItem } from "@/interface/todoitem";

const props = defineProps({
    todoItem: { type: Object as PropType<TodoItem>, required: true },
    DelTodoItem: { type: Function, required: true },
    CompleteItem: { type: Function, required: true },
});

function DelOneItem(index: number) {
    if (!index) return alert("lost index");
    // emit("DelTodoItem", index);
    props.DelTodoItem(index);
}

function clickCheckBox(index: number) {
    if (!index) return alert("lost index");
    props.CompleteItem(index);
}
</script>

<style scoped>
/* item */
li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: -30px;
}
li button {
    float: right;
    display: none;
    margin-top: 3px;
    border: none;
    background-color: #f44336;
    color: white;
    padding: 10px;
    border-radius: 6px;
    margin-left: 10px;
    cursor: pointer;
}
li:hover {
    background-color: #ddd;
}
li:hover button {
    display: block;
}
.span-font {
    font-size: 22px;
    height: 50px;
    padding: 0 20px;
}
label {
    padding: 0;
    margin-right: 3px;
    cursor: pointer;
}
.input_checkbox {
    width: 25px;
    height: 25px;
}
</style>
