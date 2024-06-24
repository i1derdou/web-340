/**
 * Author:      David Clemens
 * Date:        2024-06-23
 * File Name:   taco-stand.js
 * Description: 
 */

const EventEmitter = require('events');

// TacoStandEmitter class extending EventEmitter
class TacoStandEmitter extends EventEmitter {
    // Method to emit 'serve' event with customer as parameter
    serveCustomer(customer) {
        this.emit('serve', customer);
    }

    // Method to emit 'prepare' event with taco as parameter
    prepareTaco(taco) {
        this.emit('prepare', taco);
    }

    // Method to emit 'rush' event with rush as parameter
    handleRush(rush) {
        this.emit('rush', rush);
    }
}

// Exporting TacoStandEmitter class as a module
module.exports = TacoStandEmitter;