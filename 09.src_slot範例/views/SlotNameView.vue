<template>
    <ComSlotName>
        <!--slot 簡寫方式使用 # 做簡寫-->
        <!-- <template #product></template> -->
        <template v-slot:product>
            <!--插槽內容在這裏面-->
            【Apple 蘋果】iPhone 14 128G(6.1吋)
        </template>
        <template v-slot:price> 折扣後價格 26,288 </template>
        <template v-slot:default>
            <p>
                結帳方式:信用卡無卡分期貨到付款行動支付<br />
                顏色 : 午夜色、星光色、紫、藍
            </p>
        </template>
    </ComSlotName>
</template>

<script>
import ComSlotName from "@/components/ComSlotName.vue";

export default {
    name: "SlowNameView",
    components: { ComSlotName },
    setup() {
        return {};
    },
};
</script>
