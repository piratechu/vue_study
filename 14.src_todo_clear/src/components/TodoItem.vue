<template>
    <li>
        <label>
            <input class="input_checkbox" type="checkbox" />
            <span class="span-font">{{ todo.id }}-{{ todo.item }}</span>
        </label>
        <button>删除</button>
    </li>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["todo"],
    data() {
        return {};
    },
    methods: {
        checkdata() {
            console.log(this.todo);
        },
    },
};
</script>

<style scoped>
li {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
li button {
    float: right;
    display: none;
    margin-top: 3px;
    border: none;
    background-color: #f44336;
    color: white;
    padding: 10px;
    border-radius: 6px;
    margin-left: 10px;
    cursor: pointer;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}

.span-font {
    font-size: 22px;
    height: 50px;
    padding: 0 20px;
}

label {
    padding: 0;
    margin-right: 3px;
    cursor: pointer;
}

.input_checkbox {
    width: 25px;
    height: 25px;
}
</style>
