<template>
    <div class="container mt-5 aipage">
        <h1 class="text-center mb-4">AI gedicht</h1>

        <section v-if="phase == 0">
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
                        <option value="valentijn">Valentijn</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="theme">Thema</label>
                    <select class="form-select" v-model="theme">
                        <option value="liefde">Liefde</option>
                        <option value="dood">Dood</option>
                        <option value="de natuur">De natuur</option>
                        <option value="wind">Wind</option>
                        <option value="de zee">De zee</option>
                        <option value="de stad">De stad</option>
                        <option value="moeder">Moeder</option>
                        <option value="vader">Vader</option>
                        <option value="kind">Kind</option>
                        <option value="vrouw">Vrouw</option>
                        <option value="broer">Broer</option>
                        <option value="geboorte">Geboorte</option>
                        <option value="vriendschap">Vriendschap</option>
                        <option value="buurmeisje">Buurmeisje</option>
                        <option value="collega">Collega</option>
                        <option value="vrouw">Vrouw/vriendin</option>
                        <option value="ouder worden">Ouder worden</option>
                    </select>
                </div>
            </div>
            <div class="mb-3">
                <label for="prompt">Geef de AI extra informatie</label>
                <textarea class="form-control" v-model="prompt" cols="30" rows="5"
                    placeholder="Geef de context, je rol, beschrijf de situatie, je doel" />
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
        </section>
        <div class="row mb-3">
            <div class="text-center mb-4">
                <button v-if="phase == 0" class="btn btn-primary" @click="getPoem">Genereer gedicht</button>&nbsp;
                <input  style="margin-top: 0.5em;" v-if="phase > 0" type="text" class="form-control" v-model="feedback" placeholder="Geef feedback voor verbeterde versie">

                <button v-if="phase > 0" class="btn btn-primary" @click="rewritePoem">Herschrijf gedicht</button>&nbsp;
                <hr/>
                <button v-if="phase > 0" class="btn btn-primary" @click="resetPoem">Reset gedicht</button>
            </div>
        </div>
        <div class="row mb-3">
            <div v-for="item in chatsession" :key="item.id" class="mb-3">
                <pre class="bg-light p-3">{{ item.answer }}</pre>
            </div>
        </div>
    </div>
</template>

<script>
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.VUE_APP_GOOGLE_AP_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

export default {
    data() {
        return {
            prompt: '',
            answer: '',
            totalPrompt: '',
            chatsession: [],
            phase: 0,
        };
    },
    methods: {
        async rewritePoem() {
            this.chatsession = [];
            this.totalPrompt = 'Her'+ this.totalPrompt + this.feedback;

            const result = await model.generateContent(this.totalPrompt);
            this.answer = `${result.response.text()}`;
            this.chatsession.push({ id: this.chatsession.length, prompt: this.prompt, answer: this.answer });
            this.phase++;
        },
        resetPoem() {
            this.phase = 0;
            this.prompt = '';
            this.answer = '';
            this.totalPrompt = '';
            this.chatsession = [];
        },
        async getPoem() {
            this.chatsession = [];
            var i1 = `schrijf een ${this.type} gedicht over ${this.theme}. En laat de emotie ${this.emotion} erin overheersen, of gradueel toenemen of afnemen. Gebruik een enkel moeilijk of ongebruikelijk woord. Steel af en toe uit bekende gedichten van oude oude bekende dichters.`;
            var i2 = ` Het gedicht mag maximaal 33 regels zijn.`;
            this.totalPrompt = i1 + this.prompt + "." + i2;
            const result = await model.generateContent(this.totalPrompt);
            this.answer = `${result.response.text()}`;
            this.chatsession.push({ id: this.chatsession.length, prompt: this.prompt, answer: this.answer });
            this.phase++;
        }
    }
};
</script>

<style scoped>
h1 {
  font-size: 2em;
  text-align: center;
  color: var(--primary-color);

}

input {
    margin-right: 10px;
    width: 100%;
}

label {
    font-weight: bold;
    color: #fff
}
div.aipage {
    margin: 0 auto;
}
h1 {
    color: var(--tertiary-color);
    margin-bottom: 0;
}
</style>