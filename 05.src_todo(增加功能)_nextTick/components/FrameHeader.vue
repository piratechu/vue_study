<template>
    <div class="todo-header">
        <input
            type="text"
            placeholder="請輸入任務名稱"
            v-model="TodoDescript"
            @keyup.enter="KeyInTodo"
        />
    </div>
</template>

<script>
//uuid 簡易版本

import { now } from "lodash";

//import { nanoid } from "nanoid";
export default {
    name: "FrameHeader",
    //修改成 emit 事件，不需要設定 props
    // props: ["InsertTodo"],
    data() {
        return {
            TodoDescript: "",
        };
    },
    methods: {
        KeyInTodo(todo) {
            if (!this.TodoDescript) return alert("輸入的todo不能為空");
            //輸入組成 todo 物件
            const data = {
                id: now(), //透過 nanoid 元件新增獨立 id
                item: this.TodoDescript,
                doFlag: false,
                isEdit: false,
            };
            //console.log(data);
            //透過 App.vue 進行兩個 component 進行資料交換
            //this.InsertTodo(data);
            this.$emit("InsertTodo", data);
            //清空輸入列
            todo.target.value = "";
        },
    },
};
</script>
