<template>
    <div>
        <h1 class="content">我是 about 頁面，只有孤單自己</h1>
        <h1>x: {{ point.x }}, y:{{ point.y }}</h1>
    </div>
</template>

<script>
import usePoint from "../usePoint.js";

export default {
    name: "AboutView",
    setup() {
        const point = usePoint();
        console.log("about:", point);
        return { point };
    },
};
</script>

<style scoped>
.content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
}
</style>
