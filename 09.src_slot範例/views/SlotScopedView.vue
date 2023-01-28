<template>
    <ComSlotScoped>
        <template #product> 【Apple 蘋果】iPhone 14 128G(6.1吋) </template>
        <template #price> 折扣後價格 26,288 </template>
        <template #default>
            <p>
                結帳方式:信用卡無卡分期貨到付款行動支付<br />
                顏色 : 午夜色、星光色、紫、藍
            </p>
        </template>
        <template #result="resultProps">
            <div>
                已選購: {{ resultProps.quantity }} , 總價:
                {{ resultProps.quantity * 26288 }}
            </div>
            <!-- {{ totalPrice }}
            <p v-show="false">{{ (this.selQty = resultProps.quantity) }}</p> -->
        </template>
        <!-- <template #result="{ quantity }"> 解構 : {{ quantity }} </template> -->
        <template #item="{ body, username, likes }">
            <p class="meta">
                {{ body }} / by {{ username }} | {{ likes }} likes
            </p>
        </template>
    </ComSlotScoped>
</template>

<script>
import ComSlotScoped from "@/components/ComSlotScoped.vue";
import { ref } from "vue";

export default {
    name: "SlotScopedView",
    components: { ComSlotScoped },
    setup() {
        const selQty = ref(0);
        return {
            selQty,
        };
    },
};
</script>
<style>
.meta {
    font-size: 0.8em;
    color: #42b883;
}
</style>
