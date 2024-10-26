const IHO22S1A = `
;1;367913;;;;;Abdullah Al-Anesi
;2;360640;;;;;Joris van Beers0
;3;373761;;;;;Rob van den Biggelaar
;4;330083;;;;;Robin Boersma
;5;372936;;;;;Alyssia Gülük
;6;374680;;;;;Milan van Hemert
;7;374407;;;;;Wilco van den Heuvel
;8;333886;;;;;Ricardo Kerssens
;9;377402;;;;;Stan van Pinxten
;10;342229;;;;;Ian Pipe
;11;375520;;;;;Jacques Prinsen
;12;366671;;;;;Noah Schrijver
;13;376625;;;;;Duc Tan Ta
;14;377571;;;;;Stef Tax
;15;376444;;;;;Marijn van Vugt
;16;363822;;;;;Angelo Weesenaar
;17;375871;;;;;Job Zoutewelle
`;

//namenLijst is een array van namen die op iedere regel van de csv staan in de 8 ste kolom, gescheiden door ;
const namen = IHO22S1A.split('\n').map(line => line.split(';')[7]);

export default namen; 
