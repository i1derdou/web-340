/**
 * Author:      David Clemens
 * Date:        2024-06-23
 * File Name:   taco-stand.spec.js
 * Description: Unit testing document
 */

const assert = require('assert');
const TacoStandEmitter = require('../src/taco-stand');

// Test function for serveCustomer method
function testServeCustomer() {
    try {
        const tacoStand = new TacoStandEmitter();
        
        // Registering event listener for 'serve' event
        tacoStand.on('serve', (customer) => {
            assert.strictEqual(customer, 'John'); // Assert that the customer is 'John'
        });
        
        // Calling serveCustomer method
        tacoStand.serveCustomer('John');
        
        console.log("Passed testServeCustomer");
        return true;
    } catch (err) {
        console.error(`Failed testServeCustomer: ${err}`);
        return false;
    }
}

// Test function for prepareTaco method
function testPrepareTaco() {
    try {
        const tacoStand = new TacoStandEmitter();
        
        // Registering event listener for 'prepare' event
        tacoStand.on('prepare', (taco) => {
            assert.strictEqual(taco, 'beef'); // Assert that the taco is 'beef'
        });
        
        // Calling prepareTaco method
        tacoStand.prepareTaco('beef');
        
        console.log("Passed testPrepareTaco");
        return true;
    } catch (err) {
        console.error(`Failed testPrepareTaco: ${err}`);
        return false;
    }
}

// Test function for handleRush method
function testHandleRush() {
    try {
        const tacoStand = new TacoStandEmitter();
        
        // Registering event listener for 'rush' event
        tacoStand.on('rush', (rush) => {
            assert.strictEqual(rush, 'lunch'); // Assert that the rush is 'lunch'
        });
        
        // Calling handleRush method
        tacoStand.handleRush('lunch');
        
        console.log("Passed testHandleRush");
        return true;
    } catch (err) {
        console.error(`Failed testHandleRush: ${err}`);
        return false;
    }
}

// Run tests
testServeCustomer();
testPrepareTaco();
testHandleRush();