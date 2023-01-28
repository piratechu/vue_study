<template>
    <!--為了以表達式執行(數字)，需用 v-bind(:)-->
    <MixinInfo user="張三" sex="女" age="19"></MixinInfo>
</template>

<script>
import MixinInfo from '@/components/MixinInfo.vue'

//混入
export default {
    name: "MixinView",
    components: { MixinInfo }
}
</script>
