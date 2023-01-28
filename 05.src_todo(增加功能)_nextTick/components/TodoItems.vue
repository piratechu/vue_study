<template>
    <TodoItem
        v-for="t in todos"
        :key="t.id"
        :id="t.id"
        :item="t.item"
        :doFlag="t.doFlag"
        :isEdit="t.isEdit"
        :changeTodo="changeTodo"
        :removeTodo="removeTodo"
        :editTodo="editTodo"
        :updateTodo="updateTodo"
    ></TodoItem>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
    name: "TodoItems",
    components: { TodoItem },
    props: ["todos", "changeTodo", "removeTodo", "editTodo", "updateTodo"],
};
</script>
