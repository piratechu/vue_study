<template>
    <!--為了以表達式執行(數字)，需用 v-bind(:)-->
    <PropsInfo name="張三" sex="女" :age="19"></PropsInfo>
</template>

<script>
import PropsInfo from '@/components/PropsInfo.vue'

export default {
    name: "PropsView",
    components: { PropsInfo }
}
</script>
