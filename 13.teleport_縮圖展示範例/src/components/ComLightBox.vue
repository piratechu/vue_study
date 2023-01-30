<template>
    <div>
        <div class="lightbox" @click="closeLightBox">
            <img :src="currentUrl" alt="image" />
        </div>
        <div class="thumbnail">
            <a
                @click="showImg(i)"
                v-for="(url, i) in urls"
                :key="url"
                href="#"
                :class="{ activeUrl: currentUrl === url }"
            >
                <img :src="url" alt="image" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        urls: {
            type: Array,
        },
        currentUrl: {
            type: String,
        },
    },
    methods: {
        showImg(i) {
            this.$emit("show-img", i);
        },
        closeLightBox(e) {
            this.$emit("close-light-box", e);
        },
    },
};
</script>

<style lang="scss" scoped>
.lightbox {
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    width: 500px;
    height: 500px;
    object-fit: cover;
}

.thumbnail {
    display: flex;
    position: fixed;
    bottom: 0;

    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        display: block;
    }
}

.activeUrl {
    display: block;
    border: 2px solid #ededed;
}
</style>
