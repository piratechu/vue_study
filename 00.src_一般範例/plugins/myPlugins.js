export default {
    // install: (app, options) => { 
    install(){
        //配置應用
        console.log('可以在plugins做全局屬性');
    }
};
// 插件没有严格定义的使用范围，但是插件发挥作用的常见场景主要包括以下几种：
// 通过 app.component() 和 app.directive() 注册一到多个全局组件或自定义指令。
// 通过 app.provide() 使一个资源可被注入进整个应用。
// 向 app.config.globalProperties 中添加一些全局实例属性或方法
// 一个可能上述三种都包含了的功能库 (例如 vue-router)。
// https://cn.vuejs.org/guide/reusability/plugins.html#introduction