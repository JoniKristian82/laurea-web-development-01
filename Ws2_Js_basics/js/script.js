const name = "Joni";
let age = 30;
const favouriteAnimal = "Tiikeri";

console.log(name);
console.log(age);
console.log(favouriteAnimal);

console.log(`Terve! Minun nimeni on ${name} ja minun lempieläimeni on ${favouriteAnimal}.`);

const userName = prompt("Kirjoita nimesi:");

console.log(`Tervehdys ${userName}! Tervetuloa JavaScriptin pariin.`);

const ika = prompt("Kuinka vanha olet?");
const ageNumber = Number(ika);

if (ageNumber >= 18) {
    console.log("Olet aikuinen.");
} else {
    console.log("Olet alle 18-vuotias.");
}
function tervehdiKayttajaa(nimi) {
    console.log(`Hei ${nimi}! Mukava nähdä sinua.`);
}

const annettuNimi = prompt("Kirjoita nimesi:");

tervehdiKayttajaa(annettuNimi);

function naytaViesti(Se toimii) {
    alert("JavaScript toimii!");
}