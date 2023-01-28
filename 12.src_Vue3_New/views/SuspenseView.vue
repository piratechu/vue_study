<template>
    <button @click="reload">Reload page</button>
    <BeforeSuspense time="3000">
        <BeforeSuspense time="2000" />
        <BeforeSuspense time="1000">
            <BeforeSuspense time="500" />
            <BeforeSuspense time="4000" />
        </BeforeSuspense>
    </BeforeSuspense>
</template>

<script>
import BeforeSuspense from "@/components/BeforeSuspense.vue";
export default {
    name: "SuspenseView",
    components: { BeforeSuspense },
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped></style>
