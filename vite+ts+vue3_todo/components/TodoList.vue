<template>
    <div>
        <TodoListItem
            v-for="t in props.todoItems"
            :key="t.id"
            :todoItem="t"
            :DelTodoItem="DelTodoItem"
            :CompleteItem="CompleteItem"
        />
    </div>
</template>

<script setup lang="ts">
import TodoListItem from "./TodoListItem.vue";
import { defineProps } from "vue";
import type { PropType } from "vue";
import type { TodoItem as ifTodoItem } from "@/interface/todoitem";
//This approach is called runtime declaration
// const props = defineProps({
//     todoItems: { type: Array as PropType<ifTodoItem[]>, default: () => [] },
// });
//With type declaration we pass the type directly to the macro
const props = defineProps({
    todoItems: {
        type: Array as PropType<ifTodoItem[]>,
    },
    DelTodoItem: {
        type: Function,
        required: true,
    },
    CompleteItem: {
        type: Function,
        required: true,
    },
});

// const emmit = defineEmits(["DelTodoItem"]);
// const emit = defineEmits<{ (e: "DelTodoItem", index: number): void }>();

// function DelTodoItem(index: number) {
//     // emit("DelTodoItem", index);
//     props.DelTodoItem(index);
// }
</script>

<style scoped></style>
