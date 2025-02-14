<template>
    <div>
        <div v-if="!isLoggedIn">
            <form @submit.prevent="login">
                <div>
                    <label for="username">Username:</label>
                    <input type="text" v-model="username" id="username" required />
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="password" v-model="password" id="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
            <div v-if="errorMessage">{{ errorMessage }}</div>
        </div>
        <div v-else>
            <p>Welcome, {{ username }}!</p>
            <button type="submit">Logout</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: '',
            isLoggedIn: false,
            errorMessage: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('http://localhost:1337/auth/local', {
                    identifier: this.username,
                    password: this.password
                });
                this.isLoggedIn = true;
                this.errorMessage = '';
            } catch (error) {
                this.errorMessage = 'Invalid username or password';
            }
        }
    }
};
</script>

<style scoped>
/* Add your styles here */
</style>