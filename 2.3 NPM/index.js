// var generateName = require("sillyname");
// import generateName from "superheroes";

// var superheroes = generateName();

// console.log(`My name is ${superheroes}.`);

// const superheroes = require("superheroes");

// const superheroes = require("superheroes");
import superheroes from "superheroes";

console.log(superheroes);

const randomIndex = Math.floor(Math.random() * superheroes.length);
const superheroName = superheroes[randomIndex];
console.log(`I am ${superheroName}!`);

