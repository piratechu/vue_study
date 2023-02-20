<template>
    <div>
        <!-- {{ Users }} -->
        <ul>
            <li v-for="(user, index) in Users" :key="index">
                {{ user.name.last }} - {{ user.email }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            Users: [],
        };
    },
    methods: {
        async getUser() {
            const data = await axios.get(
                "https://randomuser.me/api/?results=10"
            );
            return data;
        },
    },
    mounted() {
        this.getUser().then((resposne) => {
            this.Users = resposne.data.results;
            console.log(this.Users);
        });
    },
};
</script>
