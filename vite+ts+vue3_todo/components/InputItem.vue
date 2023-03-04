<template>
    <div>
        <div class="todo-header">
            <input
                class="input"
                type="text"
                placeholder="請輸入任務名稱"
                v-model="inputItem"
                @keypress.enter="insertItem"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TodoItem } from "@/interface/todoitem";
import type { PropType } from "vue";

// const emit = defineEmits(["AddNewItem"]);
const props = defineProps({
    AddNewItem: {
        type: Function,
        required: true,
    },
});

let inputItem = ref("");

function insertItem() {
    if (!inputItem.value) return alert("輸入為空，請重新輸入");
    const ItemData: TodoItem = {
        id: new Date().getTime(),
        item: inputItem.value,
        isComplete: false,
    };
    // emit("AddNewItem", ItemData);
    props.AddNewItem(ItemData);
    inputItem.value = "";
}
</script>

<style scoped>
/* header */
.todo-header {
    background-color: #eee;
    border-radius: 6px;
    display: flex;
    align-items: center;
}
.input {
    border: 1px solid #ddd;
    border-radius: 6px;
    width: 90%;
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
