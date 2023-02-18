<template>
    <div>
        <p ref="pDom">{{ p }}</p>
        <p>{{ p1 }}</p>
        <p>{{ p2 }}</p>
        <p>{{ p3 }}</p>
        <button @click="ChangeP">Change nextTick</button>
    </div>
</template>

<script>
import { ref, nextTick } from "vue";

export default {
    setup() {
        let p = ref("Befor nextTick");
        let p1 = ref("");
        let p2 = ref("");
        let p3 = ref("");
        return { p, p1, p2, p3 };
    },
    mounted() {
        this.p = "After nextTick";
        this.p1 = this.$refs.pDom.innerHTML; //抓到未變更前
        //是一個非同步的函數
        this.$nextTick(() => {
            this.p2 = this.$refs.pDom.innerHTML;
        });
        this.p3 = this.$refs.pDom.innerHTML; //抓到未變更前
    },
    methods: {
        async ChangeP() {
            this.p = "nextTick";
            this.p1 = this.$refs.pDom.innerHTML; //抓到原來的值
            await nextTick();
            this.p3 = this.$refs.pDom.innerHTML;
        },
    },
};
</script>

<style lang="scss" scoped></style>
