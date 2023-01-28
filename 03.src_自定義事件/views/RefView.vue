<template>
    <div class="home">
        <!--普通 DOM 元素上使用，取得 DOM 資料-->
        <h1 ref="msgRef">{{ msg }}</h1>
        <ul>
            <!--vue3 當中使用 v-for & ref 結合，不會生成 $ref 數組，需要手動設置 -->
            <li v-for="item in 5" :ref="setItemRefs" :key="item">
                {{ item }} - ref
            </li>
        </ul>
        <h1 :ref="msgFunRef">{{ msg }}</h1>
        <ul>
            <!--vue3 當中使用 v-for & ref 結合(函數)，不會生成 $ref 數組，需要手動設置 -->
            <li
                v-for="item in 5"
                :ref="(el) => setItemFunRefs(item, el)"
                :key="item"
            >
                {{ item }} - ref
            </li>
        </ul>

        <RefData ref="childRef"></RefData>
    </div>
</template>

<script>
import RefData from "@/components/RefData.vue";
import { ref, onMounted, reactive } from "vue";

export default {
    name: "RefView",
    components: { RefData },
    setup() {
        const msgRef = ref(null);
        //Object 或 Array 要使用 reactive 來做
        const itemRefs = reactive([]);
        const itemFunRefs = reactive([]);
        //函數綁定 (function)
        const msgFunRef = (el) => {
            console.log("msg function:", el);
        };
        onMounted(() => {
            console.log("h1 tag ref:", msgRef.value);
            console.log("v-for:", itemRefs);
            console.log("v-for function:", itemFunRefs);
        });
        function setItemRefs(dom) {
            if (dom) {
                itemRefs.push(dom);
            }
        }
        function setItemFunRefs(index, el) {
            if (el)
                itemFunRefs.push({
                    id: index,
                    xml: el,
                });
        }
        return {
            msgRef,
            msg: "ref使用方式",
            setItemRefs,
            msgFunRef,
            setItemFunRefs,
        };
    },
    mounted() {
        console.log("AlertRef:", this.$refs.childRef.AlertRef());
        console.log("count:", this.$refs.childRef.count);
    },
};
</script>
