<template>
    <div>
        <h1>AI Pagina test 1</h1>
        <input v-model="prompt" placeholder="Voer uw prompt in" />
        <button @click="getAnswer">Verstuur</button>
        <div v-if="answer">
            <h2>Antwoord:</h2>
            <p>{{ answer }}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            prompt: '',
            answer: ''
        };
    },
    methods: {
        getAnswer() {
            this.answer = `Dit is een voorbeeldantwoord voor de prompt: ${this.prompt}`;
        }
    }
};
</script>

<style scoped>
input {
    margin-right: 10px;
}
</style>