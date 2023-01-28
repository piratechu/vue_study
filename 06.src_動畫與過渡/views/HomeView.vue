<template>
    <TransitionComponent></TransitionComponent>
</template>

<script>
// @ is an alias to /src
import TransitionComponent from "@/components/TransitionComponent.vue";

//利用 HomeView.vue 做各組件間的 props 交換資料
export default {
    name: "HomeView",
    components: {
        TransitionComponent,
    },
    setup() {
        return {};
    },
};
</script>
