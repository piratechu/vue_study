<!-- option api 用法 mixins -->
<template>
    <button @click="increment">click: {{ count }}</button>
</template>

<script>
import CounterMixin from "../Mixins/Counter";

export default {
    mixins: [CounterMixin],
};
</script>
