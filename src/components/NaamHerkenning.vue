<template>
  <div class="container mt-5 calc">
    <h1 class="text-center mb-4">Stem calculator</h1>
    <p class="text-center">Voer een bewerking uit met getallen die je hardop zegt.</p>
    <p class="text-center">
      <!-- buttons voor de bewerkingen +, -, *, / die je kunt doen met getallen en een  = om het eindresultaat te berekenen -->
      <button class="btn btn-primary" @click="setbewerking('+')">+</button>&nbsp;
      <button class="btn btn-primary" @click="setbewerking('-')">-</button>&nbsp;
      <button class="btn btn-primary" @click="setbewerking('*')">*</button>&nbsp;
      <button class="btn btn-primary" @click="setbewerking('/')">/</button>&nbsp;
      <button class="btn btn-primary" @click="popGetal()">&lt;</button>&nbsp;
      <button class="btn btn-secondary" @click="berekenen">=</button>
    </p>
    <div class="text-center mb-4">
      <button class="btn btn-primary" @click="startLuisteren">{{ instructie }}</button>
    </div>
    <div class="text-center">
    <ul>
      <li v-for="get in getallen" v-bind:key="get">
        {{ get }}
      </li>
    </ul>
    <button class="btn btn-primary" >Bewerking:{{ bewerking }}</button><br>
    <button class="btn btn-primary" >Uitkomst: {{ uitkomst }}</button>
  </div>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    // Instructie voor de gebruiker
    const instructie = ref("Start met nieuwe som");
    var getallen = ref([]);
    var bewerking = ref("???");
    var uitkomst = ref(0);
    
    const setbewerking = (bew) => {
      bewerking.value = bew;
    };

    const popGetal = () => {
      getallen.value.pop();
    };  

    const berekenen = () => {
      // als er geen getallen zijn ingevoerd dan geef een melding
      if (getallen.value.length === 0) {
        instructie.value = "Er zijn geen getallen ingevoerd";
        return;
      }
      // als er maar 1 getal is ingevoerd dan geef een melding
      const som = getallen.value.join(bewerking.value);
      instructie.value = som;
      try {
        // rond de eval som af op 2 decimalen
        uitkomst.value = Math.round(eval(som) * 100) / 100;

      } catch (e) {
        instructie.value = "Er is een fout opgetreden bij het berekenen";
        getallen.value = [];
        return;
      }
      getallen.value = [];
    };
    // Functie om te luisteren naar spraak
    const startLuisteren = () => {
      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then(stream => {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognizer = new SpeechRecognition();
            recognizer.lang = "nl-NL";

            recognizer.onresult = (event) => {
              var transcript = event.results[0][0].transcript;
              // als de transcript naar een getal kan worden gecoverteerd dan voeg het toe aan getallen array
              if (transcript !== "" ) {
                //vervang kommas door punten
                transcript = transcript.replace(/,/g, ".");
                //check of er spaties in de transcript zitten en splits deze dan naar een array
                var transcriptArray = transcript.split(" ");
                if (transcriptArray.length > 1) {
                  getallen.value.push(...transcriptArray);
                }
                else {
                  getallen.value.push(transcript);
                }
              }
              else {
                instructie.value = "Dat is geen getal";
              }
            };

            recognizer.start();

            recognizer.onstart = () => {
              instructie.value = "Ik luister...";
            };

            recognizer.onend = () => {
              stream.getTracks().forEach(track => track.stop());
              instructie.value = "Volgende getal...";
              startLuisteren();
            };
          })
          .catch(err => {
            console.error("Fout bij het gebruiken van de microfoon:", err);
          });
      } else {
        console.error("De browser ondersteunt geen getUserMedia");
      }
    };

    return {
      setbewerking,
      bewerking,
      startLuisteren,
      instructie,
      getallen,
      berekenen,
      uitkomst,
      popGetal
    };
  }
};
</script>
<style>
h1 {
  font-size: 2em;
  text-align: center;
  color: var(--primary-color);

}

.calc p, .calc li {
    font-weight: bold;
    color: #fff
}
li {
    list-style-type: none;
}
button {
    margin: 10px 0 10px 0; 
}
</style>