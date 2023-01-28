<template>
    <!--增加mouse in / mouse-->
    <li>
        <label>
            <input
                type="checkbox"
                :checked="doFlag"
                @click="CompleteCheck(id)"
            />
            <span>{{ item }}</span>
        </label>
        <button class="btn btn-danger" @click="removeOneTodo(id)">删除</button>
    </li>
</template>

<script>
export default {
    name: "TodoItem",
    //接收 todo item 資料
    props: ["id", "item", "doFlag", "changeTodo", "removeTodo"],
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
</style>
