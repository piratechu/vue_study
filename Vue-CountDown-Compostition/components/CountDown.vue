<template>
    <h1 class="headline">Vue CountDown</h1>
    <div class="container">
        <div class="digital">
            {{ displayDays }}
            <div class="label">Days</div>
        </div>
        <div class="digital">
            {{ displayHours }}
            <div class="label">Hours</div>
        </div>
        <div class="digital">
            {{ displayMinutes }}
            <div class="label">Minutes</div>
        </div>
        <div class="digital">
            {{ displaySeconds }}
            <div class="label">Seconds</div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, onMounted, defineProps, onUnmounted } from "vue";

const props = defineProps([
    "year",
    "month",
    "date",
    "hour",
    "minute",
    "second",
]);

//設計天、小時、分鐘、秒
let displayDays = ref(0);
let displayHours = ref(0);
let displayMinutes = ref(0);
let displaySeconds = ref(0);
// timer 拉出來，讓 unMounted 可以做 clear
let timer;
onMounted(() => {
    showRemaining();
});
onUnmounted(() => {
    clearInterval(timer);
});
//定義秒、分鐘、小時、天的單位
const _seconds = computed(() => 1000);
const _minutes = computed(() => _seconds.value * 60);
const _hours = computed(() => _minutes.value * 60);
const _days = computed(() => _hours.value * 24);
//CountDown讓外部傳遞計算時間
const _end = computed(
    () =>
        new Date(
            props.year,
            props.month,
            props.date,
            props.hour,
            props.minute,
            props.second,
            0
        )
);

function showRemaining() {
    // 設定 Interval 事件
    timer = setInterval(() => {
        // 抓取現在時間
        const now = new Date();
        // 設定目標時間
        //const end = new Date(2023, 12, 31, 23, 59, 59, 0);
        // 計算差距時間
        const distance = _end.value.getTime() - now.getTime();
        // 如果時間經到將 timer 清除
        if (distance < 0) {
            clearInterval(timer);
            return;
        }

        //Math.floor() 函式會回傳小於等於所給數字的最大整數
        const days = Math.floor(distance / _days.value);
        const hours = Math.floor((distance % _days.value) / _hours.value);
        const minutes = Math.floor((distance % _hours.value) / _minutes.value);
        const seconds = Math.floor(
            (distance % _minutes.value) / _seconds.value
        );
        //將計算結果賦值給 display 的參數
        displaySeconds.value = formatNum(seconds);
        displayMinutes.value = formatNum(minutes);
        displayHours.value = formatNum(hours);
        displayDays.value = formatNum(days);
    }, 1000);
}
//固定格式的function，寫成箭頭函數
const formatNum = (num) => (num < 10 ? "0" + num : num);
</script>

<style>
body {
    align-items: center;
    background-color: #ffd54f;
    display: flex;
}

.container {
    display: flex;
    color: #333;
    margin: 0 auto;
    text-align: center;
}

h1 {
    font-weight: normal;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
}
.digital {
    font-size: 4.5rem;
    padding: 2rem;
    text-transform: uppercase;
}
.label {
    font-size: 1.5rem;
}
</style>
