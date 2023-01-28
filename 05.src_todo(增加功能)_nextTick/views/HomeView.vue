<template>
    <!--把引入的components 放入此處-->
    <div class="todo-container">
        <div class="todo-wrap">
            <!--原本透過 props 傳遞，改成 emit-->
            <!-- <FrameHeader :InsertTodo="InsertTodo"></FrameHeader> -->
            <FrameHeader @InsertTodo="InsertTodo"></FrameHeader>
            <ul class="todo-main">
                <TodoItems
                    :todos="todos"
                    :changeTodo="changeTodo"
                    :removeTodo="removeTodo"
                    :editTodo="editTodo"
                    :updateTodo="updateTodo"
                ></TodoItems>
            </ul>
            <!--selectAll,clearAllDone 修改成 emit 函數-->
            <FrameFooter
                :todos="todos"
                @selectAll="selectAll"
                @clearAllDone="clearAllDone"
            ></FrameFooter>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import FrameHeader from "@/components/FrameHeader.vue";
import FrameFooter from "@/components/FrameFooter.vue";
import TodoItems from "@/components/TodoItems.vue";

//利用 HomeView.vue 做各組件間的 props 交換資料
export default {
    name: "HomeView",
    components: {
        FrameHeader,
        FrameFooter,
        TodoItems,
    },
    data() {
        return {
            // todos: [
            //     { id: "001", item: "全連購物", doFlag: true },
            //     { id: "002", item: "洗頭", doFlag: false },
            //     { id: "003", item: "上健身房", doFlag: false },
            // ],
            todos: JSON.parse(localStorage.getItem("todos")) || [],
        };
    },
    methods: {
        //將輸入的 todo 塞入 todos 的物件中
        InsertTodo(x) {
            this.todos.unshift(x);
            console.log("insert:" + JSON.stringify(x));
        },
        //變更 todo 勾選資料 doFlag
        changeTodo(id) {
            this.todos.forEach((todo) => {
                if (todo.id === id) todo.doFlag = !todo.doFlag;
            });
        },
        editTodo(id) {
            this.todos.forEach((todo) => {
                if (todo.id === id) todo.isEdit = !todo.isEdit;
            });
        },
        updateTodo(id, item) {
            console.log(id, item);
            this.todos.forEach((todo) => {
                if (todo.id === id) todo.item = item;
            });
        },
        //移除其中一筆 todo
        removeTodo(id) {
            this.todos = this.todos.filter((todo) => {
                return todo.id != id;
            });
        },
        //全選或者全部不選
        selectAll(getSelected) {
            this.todos.forEach((todo) => {
                if (getSelected) todo.doFlag = true;
                else todo.doFlag = false;
            });
        },
        //清除已經完成的todo資料
        clearAllDone() {
            this.todos = this.todos.filter((todo) => {
                return !todo.doFlag;
            });
        },
    },
    watch: {
        //監視 todos 的物件
        //簡寫
        // todos(value) {
        //     console.log("watch:" + JSON.stringify(value));
        //     localStorage.setItem("todos", JSON.stringify(value));
        //     //console.log(JSON.stringify(localStorage.getItem("todos")));
        // },
        //詳細的寫法，加上 deep 深度監視
        todos: {
            deep: true,
            handler(value) {
                console.log("watch:" + JSON.stringify(value));
                localStorage.setItem("todos", JSON.stringify(value));
                //console.log(JSON.stringify(localStorage.getItem("todos")));
            },
        },
    },
};
</script>
