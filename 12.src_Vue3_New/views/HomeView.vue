<template>
    <h1 class="content">toRef / toRefs 範例說明</h1>
    <h1>物件傳遞: {{ person.name }}</h1>
    <h1>toRef: {{ name }}</h1>
    <h1>物件傳遞: {{ person.age }}</h1>
    <h1>直接給定物件資料: {{ age }}</h1>
    <h1>物件傳遞: {{ person.job.job1.salary }}</h1>
    <h1>toRef: {{ salary }}</h1>
    <h5>使用 reactive 監視強制開啟 deep 監視</h5>
    <button @click="name += '#'">change name</button>
    <button @click="person.name += '#'">change person.name</button><br />
    <button @click="person.age++">change person.age</button><br />
    <button @click="age++">change age</button><br />
    <button @click="person.job.job1.salary++">change job1 salary</button><br />
    <InjectView />
    <el-row>
        <el-col>
            <router-view></router-view>
        </el-col>
    </el-row>
</template>

<script>
import { reactive, toRef, ref, toRefs, provide } from "vue";
import InjectView from "./InjectView.vue";
//import { toRef, ref, toRefs, shallowReactive } from "vue";
//import { reactive, toRef, ref, toRefs, shallowReadonly } from "vue";

export default {
    name: "HomeView",
    components: { InjectView },
    setup() {
        //定義數據
        let person = reactive({
            // let person = shallowReactive({
            name: "Tom",
            age: 18,
            job: { job1: { salary: 20 }, job2: { salary: 30 } },
        });
        const color = ref("red");

        provide("color", color);
        //這樣就可以取出 objectRefImpl的ref類型，他會去參考物件的屬性
        // const name1 = toRef(person, "name");
        // console.log("###", name1);
        console.log("toRefs:", toRefs(person));
        //深度只读数据，整個物件都不能修改
        //const person1 = readonly(person);
        //const person1 = shallowReadonly(person);
        //如果想回傳部分資料，直接將物件屬性的資料回傳，就會失去響應式的效果
        // e.g return {name:person.name} == {name="Tom"}
        return {
            //person: person1,
            person,
            //name: toRef(person, "name"),
            //如改成 ref 會變成是這個參數的變動，並非修改到 person 物件內容，這樣取資料會產生錯誤
            name: ref(person.name),
            age: person.age,
            //可以同步響應
            salary: toRef(person.job.job1, "salary"),
            //回傳的物件中不能再使用物件，所以使用展開運算子(spread operator)
            //只有第一層會拆出來，再往下的層次還是必須返回後指定
            //...toRefs(person)
            color,
        };
    },
};
</script>

<style scoped>
.content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
}
</style>
