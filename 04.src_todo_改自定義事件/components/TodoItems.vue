<template>
    <TodoItem
        v-for="t in todos"
        :key="t.id"
        :id="t.id"
        :item="t.item"
        :doFlag="t.doFlag"
        :changeTodo="changeTodo"
        :removeTodo="removeTodo"
    ></TodoItem>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
    name: "TodoItems",
    components: { TodoItem },
    props: ["todos", "changeTodo", "removeTodo"],
};
</script>
