<template>
    <!--為了以表達式執行(數字)，需用 v-bind(:)-->
    <ComposInfo user="李四" sex="男" age="50"></ComposInfo>
</template>

<script>
import ComposInfo from '@/components/ComposInfo.vue'

//混入
export default {
    name: "ComposView",
    components: { ComposInfo },
}
</script>
