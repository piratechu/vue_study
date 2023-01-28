<template>
    <TransitionGroupCom></TransitionGroupCom>
</template>

<script>
// @ is an alias to /src
import TransitionGroupCom from "@/components/TransitionGroupCom.vue";

//利用 HomeView.vue 做各組件間的 props 交換資料
export default {
    name: "TransGroupView",
    components: {
        TransitionGroupCom,
    },
    setup() {
        return {};
    },
};
</script>
