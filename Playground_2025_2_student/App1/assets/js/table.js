'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../../../../SeidoHelpers/seido-helpers.js';

let seeder = new seedGenerator();

let pets = [];
for (let index = 0; index < 10; index++) {
    
    pets.push({name: seeder.petName, age: randomNumber(0,20) });
}

pets.forEach(pet => console.log(`${pet.name} is ${pet.age} years old.`));

let table = document.querySelector(".TableContainer");
let div = document.createElement("div");
div.innerText = "pizza";
div.classList.add("TableItem");
table.appendChild(div);

let i = 0;