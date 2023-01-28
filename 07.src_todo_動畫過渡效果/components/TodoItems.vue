<template>
    <!--新增過渡動畫效果-->
    <transition-group name="todo" appear>
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
    </transition-group>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
    name: "TodoItems",
    components: { TodoItem },
    props: ["todos", "changeTodo", "removeTodo", "editTodo", "updateTodo"],
};
</script>

<style scoped>
.todo-enter-active {
    transition: all 1s ease;
}

.todo-enter-to {
    transform: translateY(0);
}
.todo-enter-from {
    transform: translateY(-50px);
}

.todo-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.todo-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
.todo-leave-active {
    transition: all 1s ease;
}
</style>
