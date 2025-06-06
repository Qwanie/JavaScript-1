'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
//https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors

// select all elements that have a class attribute
let elems = document.querySelectorAll('*[class]');
elems.forEach(elem => {
  console.log(`The following element has a class attribute: ${elem}`);
});

// select all elements that have the 'red' class
const reds = document.querySelectorAll('.red'); //'*.red' OR .red
//const reds = document.querySelectorAll('*.red'); //'*.red' OR .red
//const reds = document.querySelectorAll('*[class="red"]'); //'*.red' OR .red
reds.forEach(red => {
  console.log(
    `The following element has a class attribute with red: ${red}`
  );
});


// select <div> elements that have a class attribute
elems = document.querySelectorAll('div[class]');
elems.forEach(elem => {
  console.log(`The following <div> element has a class attribute: ${elem}`);
});


// select <p> elements that have a class attribute
elems = document.querySelectorAll('p[class="red"]');
elems.forEach(elem => {
  console.log(`The following <div> element has a class attribute with red: ${elem}`);
});
