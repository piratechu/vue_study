<template>
    <div class="login-page">
        <div class="form">
            <Transition name="flip-x" mode="out-in">
                <template v-if="typFlag === 'register'">
                    <form class="register-form">
                        <input
                            type="text"
                            placeholder="name"
                            v-model="registerName"
                            key="register-name"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            v-model="registerPwd"
                            autocomplete="new-password"
                            key="register-pwd"
                        />
                        <input
                            type="text"
                            placeholder="email address"
                            key="register-mail"
                        />
                        <button>create</button>
                        <p class="message" @click.prevent="chageType()">
                            Already registered? <a href="#">Sign In</a>
                        </p>
                    </form>
                </template>
                <template v-else>
                    <form @submit.prevent="" class="login-form">
                        <div class="wrapper">
                            <input
                                class="control"
                                type="text"
                                placeholder=""
                                v-model="userName"
                                key="login-name"
                                autocomplete="none"
                                @keyup.enter="getLogin"
                                required
                            />
                            <span class="floating-label">name</span>
                        </div>
                        <div class="wrapper">
                            <input
                                class="control"
                                type="password"
                                placeholder=""
                                v-model="userPwd"
                                autocomplete="current-password"
                                key="login-pwd"
                                @keyup.enter="getLogin"
                                required
                            />
                            <span class="floating-label">password</span>
                        </div>
                        <button @click="getLogin">login</button>
                        <p class="message" @click.prevent="chageType()">
                            Not registered? <a href="#">Create an account</a>
                        </p>
                    </form>
                </template>
            </Transition>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";

export default {
    setup() {
        let typFlag = ref("login");
        let userName = ref("");
        let userPwd = ref("");
        let registerName = ref("");
        let registerPwd = ref("");
        function getLogin() {
            console.log(userName.value, userPwd.value);
            userName.value = "";
            userPwd.value = "";
        }
        function chageType() {
            if (typFlag.value === "login") {
                typFlag.value = "register";
            } else {
                typFlag.value = "login";
            }
            console.log(typFlag.value);
        }
        return {
            userName,
            userPwd,
            getLogin,
            typFlag,
            chageType,
            registerName,
            registerPwd,
        };
    },
};
</script>

<style>
/* floating lable */
.wrapper {
    position: relative;
}
.control:focus ~ .floating-label,
.control:not(:focus):valid ~ .floating-label {
    top: -12px;
    left: 10px;
    font-size: 16px;
    opacity: 0.6;
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
    top: 14px;
    transition: 0.3s ease all;
}

.flip-x-enter,
.flip-x-leave-to {
    transform: rotateY(-80deg);
    opacity: 0;
}

.flip-x-enter-active,
.flip-x-leave-active {
    transition: transform 0.5s, opacity 0.3s;
}
.login-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
}
.form {
    position: relative;
    z-index: 1;
    background: #ffffff;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
}
.form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4caf50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
    background: #43a047;
}
.form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
}
.form .message a {
    color: #4caf50;
    text-decoration: none;
}
.form .register-form {
    /* 透過 vue v-if or v-show 控制要注意css display: none; 的設計會影響到切換 */
    /* display: none; */
}
.container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
}
.container:before,
.container:after {
    content: "";
    display: block;
    clear: both;
}
.container .info {
    margin: 50px auto;
    text-align: center;
}
.container .info h1 {
    margin: 0 0 15px;
    padding: 0;
    font-size: 36px;
    font-weight: 300;
    color: #1a1a1a;
}
.container .info span {
    color: #4d4d4d;
    font-size: 12px;
}
.container .info span a {
    color: #000000;
    text-decoration: none;
}
.container .info span .fa {
    color: #ef3b3a;
}
body {
    background: #76b852; /* fallback for old browsers */
    background: rgb(141, 194, 111);
    background: linear-gradient(
        90deg,
        rgba(141, 194, 111, 1) 0%,
        rgba(118, 184, 82, 1) 50%
    );
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
