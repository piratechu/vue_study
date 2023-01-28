<template>
    <div>
        <h1>Login Page</h1>
        <form @submit.prevent="login">
            <label>User Name</label>
            <input type="text" v-model="userName" required />
            <br />
            <label>Password</label>
            <input type="password" v-model="password" required />
            <br />
            <button type="submit">Log In</button>
        </form>
    </div>
</template>
<script>
import { useRouter } from "vue-router";

export default {
    setup() {
        const router = useRouter();
        return {
            userName: "",
            password: "",
            router,
        };
    },
    methods: {
        login() {
            //-- write login authencation logic here! --
            let auth = true;

            if (auth) {
                localStorage.setItem("auth", "true");
                this.router.push({ name: "home" });
            } else alert("login failed");
        },
    },
};
</script>
