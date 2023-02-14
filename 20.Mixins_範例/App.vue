<template>
    <ClickCounter />
    <HoverCounter />
</template>

<script>
import ClickCounter from "./components/ClickCounter.vue";
import HoverCounter from "./components/HoverCounter.vue";

export default {
    name: "App",
    components: { ClickCounter, HoverCounter },
    setup() {
        return {};
    },
};
</script>
