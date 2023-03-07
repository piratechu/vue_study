<!-- 倒數計時 -->
<template>
    <div>
        <img
            alt="Vue logo"
            class="logo"
            src="././assets/logo.png"
            width="125"
            height="125"
        />
        <div>
            <CountDown
                :year="2023"
                :month="12"
                :date="31"
                :hour="23"
                :minute="23"
                :second="59"
            />
        </div>
    </div>
</template>

<script setup>
import CountDown from "./components/CountDown.vue";
</script>

<style scoped></style>
