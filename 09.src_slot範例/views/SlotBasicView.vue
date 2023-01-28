<template>
    <ComSlotBasic2>
        我在這裡提供資料<br />
        <a href="http://xxx.xxx"> 熱門商品</a>
    </ComSlotBasic2>
</template>

<script>
import ComSlotBasic2 from "@/components/ComSlotBasic2.vue";

export default {
    name: "SlotBasicView",
    components: { ComSlotBasic2 },
    setup() {
        return {};
    },
};
</script>
