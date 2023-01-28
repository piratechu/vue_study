<template>
    <div class="head">
        <h1 class="content">我是 teleport component 頁面</h1>
        <button @click="modalOpen = true">
            Open full screen modal! (With teleport!)
        </button>
        <!-- <teleport to="#show"> -->
        <teleport to="body">
            <!--不加 teleport 會呈現在父組件下-->
            <div v-if="modalOpen" class="modal">
                <div>
                    I'm a teleported modal! (My parent is "body")
                    <button @click="modalOpen = false">Close</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "ComTeleport",
    setup() {
        const modalOpen = ref(false);
        return { modalOpen };
    },
};
</script>

<style>
.modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.modal div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 300px;
    height: 300px;
    padding: 5px;
}

.head {
    background-color: greenyellow;
    padding: 10px;
}

.content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
}
</style>
