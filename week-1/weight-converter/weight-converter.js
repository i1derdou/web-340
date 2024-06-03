/**
 * Author: David Clemens
 * Date: 2024-06-02
 * File Name: weight-converter.js
 * Description: 
*/

"use strict";

// TODO: Implement the weight conversion logic here
const args = process.argv.slice(2);

if (args.length === 0) {
    console.error('Usage: node weight-converter.js <pounds>');
    process.exit(1);
}

const pounds = args[0];
const poundsNumber = parseFloat(pounds);

if (isNaN(poundsNumber)) {
    console.error('Input must be a number.');
    process.exit(1);
}

const kilograms = poundsNumber * 0.453592;
console.log(kilograms.toFixed(2));