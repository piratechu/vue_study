<template>
    <div class="bg">
        <a v-for="(url, i) in urls" :key="url" href="#" @click="showImg(i)">
            <img :src="url" alt="image" />
        </a>
        <br />
        <button type="button" @click="isOpen = true">open lightbox</button>
        <teleport to="body">
            <ComLightBox
                @close-light-box="closeLightBox"
                @show-img="showImg"
                v-if="isOpen"
                :currentUrl="currentUrl"
                :urls="urls"
            />
        </teleport>
    </div>
</template>

<script>
import ComLightBox from "@/components/ComLightBox.vue";

export default {
    components: {
        ComLightBox,
    },
    data() {
        return {
            urls: [
                "photo-1627322307804-c87605cf3a89.avif",
                "photo-1632714657775-232ce19778a7.avif",
                "photo-1632753043704-280dd515e81a.avif",
                "photo-1632774240308-f54b5e4145ef.avif",
            ],
            isOpen: false,
            currentImgIndex: 0,
        };
    },
    computed: {
        currentUrl() {
            return this.urls[this.currentImgIndex];
        },
    },
    methods: {
        showImg(i) {
            this.isOpen = true;
            this.currentImgIndex = i;
        },
        closeLightBox(e) {
            if (e.target.tagName === "DIV") {
                this.isOpen = false;
            }
        },
    },
};
</script>

<style scoped>
.bg {
    /* 如果外層設定了 transform， position: fixed 就會失效 */
    transform: translateY(100%);
}

img {
    width: 100px;
    height: 100px;
    object-fit: cover;
}
</style>
