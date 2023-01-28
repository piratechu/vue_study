<template>
    <Suspense>
        <h1 class="content">我是 teleport 頁面</h1>
        <ComTeleport />
        <template #fallback>
            <h1>LOADING.....</h1>
        </template>
    </Suspense>
</template>

<script>
import ComTeleport from "../components/ComTeleport.vue";

export default {
    name: "TeleportView",
    components: { ComTeleport },
    setup() {
        return {};
    },
};
</script>

<style scoped>
.content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
}
</style>
