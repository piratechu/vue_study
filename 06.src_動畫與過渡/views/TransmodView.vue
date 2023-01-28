<template>
    <TransitionMode></TransitionMode>
</template>

<script>
// @ is an alias to /src
import TransitionMode from "@/components/TransitionMode.vue";

//利用 HomeView.vue 做各組件間的 props 交換資料
export default {
    name: "TransmodView",
    components: {
        TransitionMode,
    },
    setup() {
        return {};
    },
};
</script>
