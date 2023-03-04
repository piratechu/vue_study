<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <InputItem :AddNewItem="AddNewItem" />
            <TodoList
                :todoItems="state.todoList"
                :DelTodoItem="DelTodoItem"
                :CompleteItem="CompleteItem"
            />
            <FooterInfo
                :todoItems="state.todoList"
                :toggleAllitemComplete="toggleAllitemComplete"
                :delCompleteItems="delCompleteItems"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import InputItem from "./components/InputItem.vue";
import TodoList from "./components/TodoList.vue";
import FooterInfo from "./components/FooterInfo.vue";
import { reactive } from "vue";
//將 Interface 定義成Array帶物件型態
import type { TodoItem } from "./interface/todoitem";

//第一種定義方式
// let state = reactive<{ todoList: TodoItem[] }>({ todoList: [] });
//第二種定義方式
let state = reactive({
    todoList: [] as TodoItem[],
});

function AddNewItem(item: TodoItem) {
    // console.log("add item:", item);
    state.todoList.unshift(item);
}
function DelTodoItem(index: number) {
    // console.log(index);
    state.todoList = state.todoList.filter((todo) => index != todo.id);
}

function CompleteItem(index: number) {
    state.todoList.forEach((item) => {
        if (item.id === index) item.isComplete = !item.isComplete;
    });
}

//切換全選和全不選
function toggleAllitemComplete(selected: boolean) {
    state.todoList.forEach((item) => {
        if (selected) item.isComplete = true;
        else item.isComplete = false;
    });
    // console.log(state.todoList);
}

//remove complete items
function delCompleteItems() {
    state.todoList = state.todoList.filter((item) => {
        return !item.isComplete;
    });
}
</script>

<style scoped>
.body {
    margin: 0px;
}
.todo-container {
    width: 100%;
    position: relative;
}
.todo-wrap {
    width: 600px;
    margin: 0 auto;
}
</style>
