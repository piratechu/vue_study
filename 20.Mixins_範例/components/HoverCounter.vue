<!-- composition api - composable替代 mixins -->
<template>
    <!-- <div @mouseover="increment">Hovers: {{ count }}</div> -->
    <div @mouseover="counter.increment">Hovers: {{ counter.count }}</div>
</template>

<script>
// import CounterMixin from "../Mixins/Counter";
import useCounter from "../Mixins/useCounter";

export default {
    // mixins: [CounterMixin],
    setup() {
        const counter = useCounter();
        return { counter };
    },
};
</script>

<style scoped>
div {
    background-color: aqua;
}
</style>
