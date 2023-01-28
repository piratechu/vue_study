<template>
    <div class="todo-footer" v-show="totalTodoCnt">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @click="choiseTodo" /> -->
            <input type="checkbox" v-model="isAll" />
        </label>
        <span>
            <span>已完成{{ finishCnt }}</span> / 全部 {{ totalTodoCnt }}
        </span>
        <button class="btn btn-danger" @click="clearChecked">
            清除已完成任务
        </button>
    </div>
</template>

<script>
export default {
    name: "FrameFooter",
    props: ["todos", "selectAll", "clearAllDone"],
    computed: {
        //回覆 todo 總數量
        totalTodoCnt() {
            return this.todos.length;
        },
        //回覆完成數量
        finishCnt() {
            //使用 ES6 Array 操作的一個 reduce 方法
            //https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
            //arr.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)
            //accumulator: 用來累積回呼函式回傳值的累加器（accumulator）或 initialValue（若有提供的話，詳如下敘）。累加器是上一次呼叫後，所回傳的累加數值
            //currentValue:
            //currentIndex(options): 原陣列目前所迭代處理中的元素之索引
            //array(options) : 呼叫 reduce() 方法的陣列
            //initialValue : 第一次呼叫傳入的累加器初始值，若沒提供就是陣列的第一個元素被當成初始累加器。假如於一個空陣列呼叫 reduce() 方法且沒有提供累加器初始值，將會發生錯誤。
            //console.log(this.todos);
            return this.todos.reduce(
                (acc, current) => acc + (current.doFlag ? 1 : 0),
                0
            );
            //迴圈計算方法
            // let cnt = 0;
            // this.todos.forEach((todo) => {
            //     if (todo.doFlag) cnt++;
            // });
            // return cnt;
            //console.log(cnt);
        },
        // isAll() {
        //簡寫
        // return (
        //     this.totalTodoCnt === this.finishCnt && this.totalTodoCnt > 0
        // );
        isAll: {
            //v-model 是屬於雙向綁定，computed 簡寫只能單向。如果要修改就必須寫成 getter / setter
            get() {
                return (
                    this.totalTodoCnt === this.finishCnt &&
                    this.totalTodoCnt > 0
                );
            },
            set(value) {
                console.log(value);
                this.selectAll(value);
            },
        },
    },
    //透過計算屬性就可以取得 check 的資料不用透過 methods
    methods: {
        //     choiseTodo(e) {
        //         console.log(e);
        //         this.selectAll(e.target.checked);
        //     },
        clearChecked() {
            if (confirm("確定要移除全部已完成的項目?")) this.clearAllDone();
        },
    },
};
</script>
