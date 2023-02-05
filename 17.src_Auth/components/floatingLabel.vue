<template>
    <div class="wrapper">
        <input type="text" class="control" required />
        <span class="floating-label">First Name</span>
    </div>
    <div class="wrapper">
        <input type="text" class="control" required />
        <span class="floating-label">Last Name</span>
    </div>
</template>

<script>
export default {
    setup() {
        return {};
    },
};
</script>

<style scoped>
.wrapper {
    position: relative;
}

.control:focus ~ .floating-label,
.control:not(:focus):valid ~ .floating-label {
    top: -8px;
    left: 5px;
    font-size: 14px;
    opacity: 1;
    background-color: white;
}

.control {
    font-size: 14px;
    width: 200px;
    height: 45px;
}

.floating-label {
    position: absolute;
    pointer-events: none;
    left: 20px;
    top: 13px;
    transition: 0.3s ease all;
}
</style>
