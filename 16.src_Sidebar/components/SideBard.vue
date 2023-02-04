<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
        <h1>
            <span v-if="collapsed"
                ><div>V</div>
                <div>S</div></span
            >
            <span v-else>Vue Sidebard</span>
        </h1>
        <SidebarLink imgUrl="home.png" :collapsed="collapsed">Home</SidebarLink>
        <SidebarLink imgUrl="data-report.png" :collapsed="collapsed"
            >Dashboard</SidebarLink
        >
        <SidebarLink imgUrl="data-analytics.png" :collapsed="collapsed"
            >Analytics</SidebarLink
        >
        <SidebarLink imgUrl="team.png" :collapsed="collapsed"
            >Friends</SidebarLink
        >
        <span
            class="collapse-icon"
            :class="{ 'rotate-180': collapsed }"
            @click="toggleSidebar"
        >
            <img src="@/assets/arrowheads-left.png" width="20" />
        </span>
    </div>
</template>

<script>
import { ref, computed } from "vue";
import SidebarLink from "./SidebarLink.vue";
export default {
    components: { SidebarLink },
    setup() {
        const collapsed = ref(false);
        const toggleSidebar = () => (collapsed.value = !collapsed.value);
        const SIDEBAR_WIDTH = 180;
        const SIDEBAR_WIDTH_COLLAPSED = 38;
        const sidebarWidth = computed(
            () =>
                `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
        );
        return {
            collapsed,
            toggleSidebar,
            SIDEBAR_WIDTH,
            SIDEBAR_WIDTH_COLLAPSED,
            sidebarWidth,
        };
    },
};
</script>

<style>
:root {
    --sidebar-bg-color: #2f855a;
    --sidebar-item-hover: #38a169;
    --sidebar-item-active: #276749;
}
.sidebar {
    color: white;
    /* background-color: #2f855a; */
    background-color: var(--sidebar-bg-color);
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    transition: 0.3s ease;
}

.collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;
    color: rgba(255, 255, 255, 0.7);
    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>
