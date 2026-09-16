const name = "Joni";
let age = 30;
const favouriteAnimal = "Tiikeri";

console.log(name);
console.log(age);
console.log(favouriteAnimal);

console.log(`Terve! Minun nimeni on ${name} ja minun lempieläimeni on ${favouriteAnimal}.`);

const userName = prompt("Kirjoita nimesi:");

console.log(`Tervehdys ${userName}! Tervetuloa JavaScriptin pariin.`);

const age = prompt("Kuinka vanha olet?");
const ageNumber = Number(age);

if (ageNumber >= 18) {
    console.log("Olet aikuinen.");
} else {
    console.log("Olet alle 18-vuotias.");
}
