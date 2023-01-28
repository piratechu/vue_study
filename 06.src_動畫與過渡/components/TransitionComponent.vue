<template>
    <button @click="isShow = !isShow">顯示/隱藏</button>
    <!--transition 標籤不會在 html 解析出現
            appear 屬性，是一開始是否要有動畫效果
            css 標籤有固定名稱定義
            v-enter-active / v-leave-active
            如果你的 transition 沒有定義 name，固定就是 v，如果有要替換成該名稱。
            當有兩個動畫就會需要透過 name 來區分。
        -->
    <Transition name="trans" appear>
        <h1 v-show="isShow">Vue 動畫效果</h1>
    </Transition>
</template>

<script>
import { ref } from "vue";
export default {
    name: "TransitionComponent",
    setup() {
        const isShow = ref(true);
        return {
            isShow,
        };
    },
};
</script>

<style scoped>
h1 {
    background-color: orange;
}

.trans-enter-active {
    animation: DemoAni 0.5s ease;
}
.trans-leave-active {
    animation: DemoAni 1s ease reverse;
}
/* 震動效果 */
@keyframes DemoAni {
    0% {
        transform: translateY(-60%);
    }
    50% {
        transform: translateY(0);
    }
    60% {
        transform: translateX(10px);
    }
    70% {
        transform: translateX(-10px);
    }
    80% {
        transform: translateX(-6px);
    }
    90% {
        transform: translateX(6px);
    }
    100% {
        transform: translateX(0);
    }
}
</style>
