<template>
    <!--增加mouse in / mouse-->
    <li>
        <label>
            <input
                type="checkbox"
                :checked="doFlag"
                @click="CompleteCheck(id)"
            />
            <span v-show="!isEdit">{{ item }}</span>
            <!--blur : 取消焦點事件
                ref : 可以取得該元素的 dom 操作
            -->
            <input
                class=""
                v-show="isEdit"
                type="text"
                :value="item"
                @blur="BlurUpdate(id, $event)"
                ref="editTodoInput"
            />
        </label>
        <button class="btn btn-danger" @click="removeOneTodo(id)">删除</button>
        <!--新增修改功能-->
        <button
            v-show="!isEdit"
            class="btn btn-primary"
            @click="editOneTodo(id)"
        >
            修改
        </button>
    </li>
</template>

<script>
export default {
    name: "TodoItem",
    //接收 todo item 資料
    props: [
        "id",
        "item",
        "doFlag",
        "isEdit",
        "changeTodo",
        "removeTodo",
        "editTodo",
        "updateTodo",
    ],
    data() {
        return {};
    },
    methods: {
        //已完成 todo
        CompleteCheck(id) {
            console.log(id);

            this.changeTodo(id);
        },
        //刪除 todo
        removeOneTodo(id) {
            console.log(id);

            if (confirm("確定刪除嗎?")) {
                this.removeTodo(id);
            }
        },
        editOneTodo(id) {
            this.editTodo(id);
            //此時想取得 input focus 會有問題，因為 input 仍屬於 v-show display:none
            //畫面尚未重新渲染，此時調用 focus 無法成功。
            //此行有執行但渲染的關係造成
            //使用 $nextTick
            //作用 : 在下一次DOM更新結束後再執行指定的內容
            //甚麼時候用，當改變數據後，要基於改變後的新DOM進行某些操作時，要在 nextTick所指定的回調函數中執行
            this.$nextTick(function () {
                this.$refs.editTodoInput.focus();
            });
            // console.log("call editOneTodo");
        },
        BlurUpdate(id, item) {
            this.editTodo(id);
            //console.log(id, item.target.value);
            if (item.target.value) this.updateTodo(id, item.target.value);
            else alert("輸入資料空白無法儲存");
        },
    },
};
</script>

<style scoped>
li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:hover {
    background-color: lightblue;
}

li:hover button {
    display: block;
}
li input:focus {
    outline: none;
    border-color: rgba(236, 82, 82, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(236, 82, 82, 0.8);
}
</style>
