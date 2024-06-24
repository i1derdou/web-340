/**
 * Author:      David Clemens
 * Date:        2024-06-23
 * File Name:   index.js
 * Description: 
 */

"use strict";

const TacoStandEmitter = require('../src/taco-stand');
const tacoStand = new TacoStandEmitter();

// Get command line arguments
const args = process.argv.slice(2);
const command = args[0];
const argument = args[1];

switch (command) {
    case 'serve':
        // Register event listener for 'serve' event
        tacoStand.on('serve', (customer) => {
            console.log(`Taco Stand serves: ${customer}`);
        });
        // Call serveCustomer method
        tacoStand.serveCustomer(argument);
        break;
    case 'prepare':
        // Register event listener for 'prepare' event
        tacoStand.on('prepare', (taco) => {
            console.log(`Taco Stand prepares: ${taco} taco`);
        });
        // Call prepareTaco method
        tacoStand.prepareTaco(argument);
        break;
    case 'rush':
        // Register event listener for 'rush' event
        tacoStand.on('rush', (rush) => {
            console.log(`Taco Stand handles rush: ${rush}`);
        });
        // Call handleRush method
        tacoStand.handleRush(argument);
        break;
    default:
        console.log('Unknown command');
        break;
}