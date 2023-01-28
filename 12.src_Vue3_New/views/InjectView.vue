<template>
    <h1 :style="{ color }">從HomeView Inject Person資料</h1>
</template>

<script>
import { inject } from "vue";

export default {
    name: "InjectView",
    setup() {
        const color = inject("color");
        return { color };
    },
};
</script>
