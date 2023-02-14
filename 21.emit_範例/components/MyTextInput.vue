<template>
    <div>
        <label> My Custom Input</label><br />
        <input type="text" placeholder="Custom input!" @input="handleChange" />
    </div>
</template>

<script>
export default {
    name: "MyTextInput",
    setup(props, { emit }) {
        const handleChange = (event) => {
            // 綁定上拋的事件名稱及資料
            emit("customChange", event.target.value);
        };
        return { handleChange };
    },
};
</script>

<style lang="scss" scoped></style>
