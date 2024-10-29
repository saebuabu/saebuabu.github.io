<template>
    <div>
        <h1>AI Pagina test 1</h1>
        <input v-model="prompt" placeholder="Voer uw prompt in" />
        <button @click="getAnswer">Verstuur</button>
        <div v-for="item in chatsession" :key="item.id">
            <pre>{{ item.prompt }}: {{ item.answer }}</pre>
        </div>
    </div>
</template>
<script>
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.VUE_APP_GOOGLE_AP_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default {
    data() {
        return {
            prompt: '',
            answer: '',
            chatsession: []
        };
    },
    methods: {
        async getAnswer() {

            const result = await model.generateContent(this.prompt);
            this.answer = `${result.response.text()}`;
            this.chatsession.push({ id: this.chatsession.length, prompt: this.prompt, answer: this.answer });
            this.prompt = '';
        }
    }
};
</script>

<style scoped>
input {
    margin-right: 10px;
    width: 50%;
}
</style>