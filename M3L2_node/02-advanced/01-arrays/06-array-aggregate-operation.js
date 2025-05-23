'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';

const numbers = [23, 255, 122, 5, 16, 99];

// Use a reducer function to get the total
const total = numbers.reduce( (acc, val) => acc + val, 0);
console.log(`Total: ${total}`);

// Use a reducer function to get total of all values > 100
const total2 = numbers.reduce( (acc, val) => val > 100 ? acc+val: acc, 0);
console.log(`Total of values > 100: ${total2}`);

// Use a reducer function to get the total of squares
const totalSquares = numbers.reduce( (acc, val) => acc + val**2, 0);
console.log(`Total of squares: ${totalSquares}`);

// Use a reducer function to get the average
const average = numbers.reduce( (acc, val) => acc + val, 0) / numbers.length;
console.log(`Average: ${average}`);

// Use a reducer function to find the maximum
const max = numbers.reduce( (acc, val) => acc > val ? acc: val);
console.log(`Max: ${max}`);