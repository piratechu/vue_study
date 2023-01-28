<template>
    <button @click="Show = !Show">顯示/隱藏</button>
    <button @click="addList()">新增資料</button>
    <!--mode 指的是在多個元素開始在動畫的時候，避免兩個同時出現
        所以會透過 mode 來申明順序。out-in : 離開動畫要先，然後才是進來的。
        in-out 也有，但不常使用。
    -->
    <transition name="switch" mode="out-in">
        <div v-if="items.length">
            <!--transition group 要指定一個 tag 來做容器元素的渲染-->
            <transition-group name="list" tag="ul" appear>
                <li
                    v-for="item in items"
                    :key="item.id"
                    @click="removeList(item.id)"
                >
                    <h2>{{ item.todo }}-{{ item.id }}</h2>
                </li>
            </transition-group>
        </div>
        <div v-else>todo 已經清空了，想想還有工作要進行嗎?</div>
    </transition>
</template>

<script>
import { now } from "lodash";
import { ref } from "vue";

export default {
    name: "TransitionGroupCom",
    setup() {
        const Show = ref(true);
        const items = ref([
            { id: "1", todo: "打電動" },
            { id: "2", todo: "逛 sogo" },
            { id: "3", todo: "鼎泰豐吃飯" },
        ]);
        return {
            Show,
            items,
        };
    },
    methods: {
        removeList(i) {
            let tempArr = this.items.filter((item) => item.id !== i);
            this.items = tempArr;
        },
        addList() {
            this.items.unshift({ id: now(), todo: "my work" });
        },
    },
};
</script>

<style scoped>
h1,
h2 {
    background-color: orange;
}

/*list transitions*/
.list-enter-from {
    opacity: 0;
    transform: scale(0.6);
}
.list-enter-to {
    opacity: 1;
    transform: scale(1);
}
.list-enter-active {
    transition: all 1s ease;
}

.list-leave-form {
    opacity: 1;
    transform: scale(1);
}
.list-leave-to {
    opacity: 0;
    transform: scale(0.6);
}
.list-leave-active {
    transition: all 1s ease;
    /* position: absolute; */
}
.list-move {
    transition: all 0.5s ease;
}

/* swithc transition*/
.switch-enter-from,
.swithc-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.switch-enter-active,
.switch-leave-active {
    transition: all 0.5s ease;
}
</style>
