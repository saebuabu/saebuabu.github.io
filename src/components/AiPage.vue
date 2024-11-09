<template>
    <div class="container mt-5 aipage">
        <h1 class="text-center mb-4">AI Opdracht voor een gedicht</h1>
        <div class="row mb-3">
            <div class="col-md-6">
                <label for="type">Type gedicht</label>
                <select class="form-select" v-model="type">
                    <option value="sonnet">Sonnet</option>
                    <option value="limerick">Limerick</option>
                    <option value="haiku">Haiku</option>
                    <option value="ode">Ode</option>
                    <option value="klankdicht">Klankdicht</option>
                    <option value="rap">Rap</option>
                </select>
            </div>
            <div class="col-md-6">
                <label for="theme">Thema</label>
                <select class="form-select" v-model="theme">
                    <option value="liefde">Liefde</option>
                    <option value="dood">Dood</option>
                    <option value="de natuur">De natuur</option>
                    <option value="natuurverschijnselenen">Natuurverschijnselenen</option>
                    <option value="moeder">Moeder</option>
                    <option value="vader">Vader</option>
                    <option value="kind">Kind</option>
                    <option value="vriendschap">Vriendschap</option>
                    <option value="ouder worden">Ouder worden</option>
                </select>
            </div>
        </div>
        <div class="mb-3">
            <label for="prompt">Extra info</label>
            <input class="form-control" v-model="prompt"
                placeholder="Je denkt terug aan je jeugd, waarin je gelukkig was en je fijne herinneringen had." />
        </div>

        <div class="row mb-3">
            <div class="col-md-6">
                <label for="emotion">Emotie</label>
                <select class="form-select" v-model="emotion">
                    <option value="blij">Blij</option>
                    <option value="verdrietig">Verdrietig</option>
                    <option value="boos">Boos</option>
                    <option value="verliefd">Verliefd</option>
                    <option value="bang">Bang</option>
                    <option value="verrast">Verrast</option>
                    <option value="teleurgesteld">Teleurgesteld</option>
                    <option value="gefrustreerd">Gefrustreerd</option>
                    <option value="verward">Verward</option>
                    <option value="opgelucht">Opgelucht</option>
                    <option value="trots">Trots</option>
                    <option value="jaloers">Jaloers</option>
                    <option value="verlegen">Verlegen</option>
                    <option value="geirriteerd">Geirriteerd</option>
                    <option value="gelukkig">Gelukkig</option>
                    <option value="neutraal">Neutraal</option>
                </select>
            </div>
        </div>

        <div class="row mb-3">
            <div class="text-center mb-4">
                <button class="btn btn-primary" @click="getPoem">Genereer gedicht</button>
            </div>
            <div v-for="item in chatsession" :key="item.id" class="mb-3">
                <pre class="bg-light p-3">{{ item.answer }}</pre>
            </div>
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
        async getPoem() {
            this.chatsession = [];
            var i1 = `Schrijf een ${this.type} gedicht over ${this.theme}. En laat de emotie ${this.emotion} erin overheersen, of gradueel toenemen of afnemen. Gebruik een enkel moeilijk of ongebruikelijk woord. Steel af en toe uit bekende gedichten van oude oude bekende dichters.`;
            var i2 = `Het gedicht mag maximaal 33 regels zijn.`;
            const result = await model.generateContent(i1 + this.prompt + "." + i2);
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
    width: 100%;
}
label {
    font-weight: bold;
    color: #fff
}   
</style>