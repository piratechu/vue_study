<template>
    <ul>
        <li><router-link to="/slot/basic">默認插槽(default)</router-link></li>
        <li><router-link to="/slot/name">具名插槽(Name)</router-link></li>
        <li><router-link to="/slot/scoped">作用域插槽(scoped)</router-link></li>
    </ul>
    <router-view></router-view>
</template>
