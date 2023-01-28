<template>
    <div>
        <p>new title:{{ id }}</p>
        <p>new content: {{ title }}</p>
    </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
//透過 vue-router 傳送 params ，取得 new 傳遞的 params 資料
export default {
    name: "NewsDetailView",
    setup() {
        const route = useRoute();
        // const id = computed(() => route.params.id);
        const id = computed(() => route.query.id);
        const title = computed(() => route.query.title);

        return {
            id,
            title,
        };
    },
};
</script>
