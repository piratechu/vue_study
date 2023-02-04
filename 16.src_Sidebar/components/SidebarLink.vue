<template>
    <div>
        <a href="" class="link">
            <img :src="require(`@/assets/${imgUrl}`)" width="22" />
            <transition name="fade">
                <span v-if="!collapsed">
                    <slot />
                </span>
            </transition>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        collapsed: String,
        imgUrl: String,
    },
    setup() {
        return {};
    },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.link {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    font-weight: 550;
    user-select: none;
    margin: 0.2em 0;
    padding: 0.4em;
    border-radius: 0.25em;
    height: 1.5em;
    color: white;
    text-decoration: none;
}
.link:hover {
    background-color: var(--sidebar-item-hover);
}
.link.active {
    background-color: var(--sidebar-item-active);
}
.link .icon {
    flex-shrink: 0;
    width: 25px;
    margin-right: 10px;
}
</style>
