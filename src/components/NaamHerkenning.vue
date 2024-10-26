<template>
    <div>
      <h1>Naamherkenning</h1>
        <p>Spreek de naam van de leerling en kijk of de naam wordt herkend.</p>
        <p> Te herkennen namen zijn: {{ namenLijst }}</p>
      <button @click="startLuisteren">{{ instructie }}</button>
      <p v-if="herkendeNaam">Herkende naam: {{ herkendeNaam }}</p>
      <p v-else>Geen bekende naam gevonden.</p>
    </div>
  </template>  
  <script>
  import { ref } from 'vue';
  import namen from '../assets/data/IHO22S1A.js';

  export default {
    setup() {
  
      const namenLijst = ref([...namen]);
      
      // Reactive variabelen voor de app-status
      const herkendeNaam = ref(null);
      const instructie = ref("Start met luisteren");
  
      // Functie om te luisteren naar spraak
      const startLuisteren = () => {
        if (navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
              const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
              const recognizer = new SpeechRecognition();
              recognizer.lang = "nl-NL"; 
  
              recognizer.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
  
                // Vergelijk de transcript met de namenlijst
                const naam = zoekNaam(transcript);
  
                // Update de herkende naam
                herkendeNaam.value = naam;
              };
  
              recognizer.start();

              recognizer.onstart = () => {
                instructie.value = "Ik luister...";
              };
  
              recognizer.onend = () => {
                stream.getTracks().forEach(track => track.stop());
                instructie.value = "Start opnieuw met luisteren";
              };
            })
            .catch(err => {
              console.error("Fout bij het gebruiken van de microfoon:", err);
            });
        } else {
          console.error("De browser ondersteunt geen getUserMedia");
        }
      };
  
      // Functie om een naam in de lijst te vinden
      const zoekNaam = (tekst) => {
        // Zoek de naam in de lijst die in de tekst voorkomt, het kan de voornaam of achternaam zijn in de namenlijst

        let naam = namenLijst.value.find(naam => tekst.includes(naam));

        //als de naam niet gevonden is voeg deze toe aan de lijst
        if (!naam) {
          namenLijst.value.push(tekst);
          naam = tekst;
        }
        return naam;
      };
  
      return {
        startLuisteren,
        herkendeNaam,
        namenLijst,
        instructie
      };
    }
  };
  </script>