"use strict";(self["webpackChunkaitooling"]=self["webpackChunkaitooling"]||[]).push([[594],{2080:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var r=t(6768),a=t(5130),o=t(4232);const i={key:0};function s(e,n,t,s,u,l){return(0,r.uX)(),(0,r.CE)("div",null,[n[3]||(n[3]=(0,r.Lk)("h1",null,"AI Pagina test 1",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>u.prompt=e),placeholder:"Voer uw prompt in"},null,512),[[a.Jo,u.prompt]]),(0,r.Lk)("button",{onClick:n[1]||(n[1]=(...e)=>l.getAnswer&&l.getAnswer(...e))},"Verstuur"),u.answer?((0,r.uX)(),(0,r.CE)("div",i,[n[2]||(n[2]=(0,r.Lk)("h2",null,"Antwoord:",-1)),(0,r.Lk)("p",null,(0,o.v_)(u.answer),1)])):(0,r.Q3)("",!0)])}var u={data(){return{prompt:"",answer:""}},methods:{getAnswer(){this.answer=`Dit is een voorbeeldantwoord voor de prompt: ${this.prompt}`}}},l=t(1241);const d=(0,l.A)(u,[["render",s],["__scopeId","data-v-7fb5a7aa"]]);var c=d},9206:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(6768),a=t(4232);const o={key:0},i={key:1};function s(e,n,t,s,u,l){return(0,r.uX)(),(0,r.CE)("div",null,[n[1]||(n[1]=(0,r.Lk)("h1",null,"Naamherkenning",-1)),n[2]||(n[2]=(0,r.Lk)("p",null,"Spreek de naam van de leerling en kijk of de naam wordt herkend.",-1)),(0,r.Lk)("p",null," Te herkennen namen zijn: "+(0,a.v_)(s.namenLijst),1),(0,r.Lk)("button",{onClick:n[0]||(n[0]=(...e)=>s.startLuisteren&&s.startLuisteren(...e))},(0,a.v_)(s.instructie),1),s.herkendeNaam?((0,r.uX)(),(0,r.CE)("p",o,"Herkende naam: "+(0,a.v_)(s.herkendeNaam),1)):((0,r.uX)(),(0,r.CE)("p",i,"Geen bekende naam gevonden."))])}t(4114);var u=t(144);const l="\n;1;367913;;;;;Abdullah Al-Anesi\n;2;360640;;;;;Joris van Beers0\n;3;373761;;;;;Rob van den Biggelaar\n;4;330083;;;;;Robin Boersma\n;5;372936;;;;;Alyssia Gülük\n;6;374680;;;;;Milan van Hemert\n;7;374407;;;;;Wilco van den Heuvel\n;8;333886;;;;;Ricardo Kerssens\n;9;377402;;;;;Stan van Pinxten\n;10;342229;;;;;Ian Pipe\n;11;375520;;;;;Jacques Prinsen\n;12;366671;;;;;Noah Schrijver\n;13;376625;;;;;Duc Tan Ta\n;14;377571;;;;;Stef Tax\n;15;376444;;;;;Marijn van Vugt\n;16;363822;;;;;Angelo Weesenaar\n;17;375871;;;;;Job Zoutewelle\n",d=l.split("\n").map((e=>e.split(";")[7]));var c=d,v={setup(){const e=(0,u.KR)([...c]),n=(0,u.KR)(null),t=(0,u.KR)("Start met luisteren"),r=()=>{navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia({audio:!0}).then((e=>{const r=window.SpeechRecognition||window.webkitSpeechRecognition,o=new r;o.lang="nl-NL",o.onresult=e=>{const t=e.results[0][0].transcript,r=a(t);n.value=r},o.start(),o.onstart=()=>{t.value="Ik luister..."},o.onend=()=>{e.getTracks().forEach((e=>e.stop())),t.value="Start opnieuw met luisteren"}})).catch((e=>{console.error("Fout bij het gebruiken van de microfoon:",e)})):console.error("De browser ondersteunt geen getUserMedia")},a=n=>{let t=e.value.find((e=>n.includes(e)));return t||(e.value.push(n),t=n),t};return{startLuisteren:r,herkendeNaam:n,namenLijst:e,instructie:t}}},p=t(1241);const k=(0,p.A)(v,[["render",s]]);var m=k}}]);
//# sourceMappingURL=about.cc24a8cc.js.map