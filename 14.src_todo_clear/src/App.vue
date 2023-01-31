<template>
    <!--把引入的components 放入此處-->
    <div class="todo-container">
        <div class="todo-wrap">
            <FrameHeader></FrameHeader>
            <ul class="todo-main">
                <TodoItems></TodoItems>
            </ul>
            <FrameFooter></FrameFooter>
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
    name: "App",
    components: {
        FrameHeader,
        FrameFooter,
        TodoItems,
    },
    data() {
        return {};
    },
    methods: {},
};
</script>
