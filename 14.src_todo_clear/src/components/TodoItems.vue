<template>
    <TodoItem v-for="t in todos" :key="t.id" :todo="t" />
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
    name: "TodoItems",
    components: { TodoItem },
    data() {
        return {
            todos: [
                { id: "001", item: "全連購物", doFlag: true },
                { id: "002", item: "洗頭", doFlag: false },
                { id: "003", item: "上健身房", doFlag: false },
            ],
        };
    },
};
</script>
