<template>
    <button @click="Show = !Show">顯示/隱藏</button>
    <Transition name="tans-mode" appear>
        <h2 v-show="Show">Vue Transition Mode 過度效果</h2>
    </Transition>
    <Transition name="fade" appear>
        <h2 v-show="Show">消失效果</h2>
    </Transition>
</template>

<script>
import { ref } from "vue";

export default {
    name: "TransitionMode",
    setup() {
        const Show = ref(true);
        return {
            Show,
        };
    },
};
</script>

<style scoped>
h2 {
    background-color: orange;
}

.tans-mode-enter-active,
.tans-mode-leave-active {
    transition: all 750ms linear;
}

/* 進入的終點 、離開的起點*/
.tans-mode-enter-to,
.tans-mode-leave {
    transform: translateX(0);
}

/* 進入的起點、離開的終點 */
.tans-mode-enter-from,
.tans-mode-leave-to {
    transform: translateX(-100%);
}

/* 消失的效果(淡入淡出) */
.fade-enter-active,
.fade-leave-active {
    transition: all 750ms ease-in-out;
}

/* 進入的終點 、離開的起點*/
.fade-enter-to,
.fade-leave {
    opacity: 1;
    transform: translateY(0);
}

/* 進入的起點、離開的終點 */
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-60px);
}
</style>
