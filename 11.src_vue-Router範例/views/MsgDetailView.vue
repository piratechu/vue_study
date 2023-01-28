<template>
    <div>
        <p>props id : {{ id }}</p>
        <p>id : {{ queryId }}</p>
        <p>Msg content: {{ queryTitle }}</p>
    </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

//透過 props 傳遞參數
export default {
    name: "MsgDetailView",
    props: ["id"],
    setup() {
        const route = useRoute();
        // const id = computed(() => route.params.id);
        const queryId = computed(() => route.query.id);
        const queryTitle = computed(() => route.query.title);
        return { queryId, queryTitle };
    },
};
</script>
