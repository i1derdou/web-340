/**
 * Author:    David Clemens
 * Date:      2024-07-14
 * File Name: character-creator.js
 * Description:
 */
"use strict";

const { Duplex } = require('stream');

/**
 * CharacterCreator class extends Duplex stream to process character creation data
 */
class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // Initialize characterData with empty values
    this.characterData = {
      class: '',
      gender: '',
      funFact: ''
    };
  }

  /**
   * _write method to process input data written to the stream
   * @param {Buffer|string} chunk - The data chunk to be processed
   * @param {string} encoding - The encoding type, if chunk is a string
   * @param {function} callback - The callback function to indicate processing is complete
   */
  _write(chunk, encoding, callback) {
    // Split the chunk into key and value based on the colon separator
    const data = chunk.toString().split(':');

    // Check if the split resulted in exactly two parts and the value part is not empty
    if (data.length !== 2 || !data[1].trim()) {
      // Emit an error event if data is invalid
      this.emit('error', new Error('Invalid data'));
      return callback(new Error('Invalid data'));
    }

    // Trim and convert key to lowercase, and trim the value
    const key = data[0].trim().toLowerCase();
    const value = data[1].trim();

    // Map valid keys to the correct characterData properties
    const keyMap = {
      class: 'class',
      gender: 'gender',
      funfact: 'funFact'
    };

    // Check if the key is valid and update the corresponding property in characterData
    if (keyMap[key]) {
      this.characterData[keyMap[key]] = value;
      callback();
    } else {
      // Emit an error event if the key is invalid
      this.emit('error', new Error('Invalid key'));
      callback(new Error('Invalid key'));
    }
  }

  /**
   * _read method to output the processed character description
   * @param {number} size - The number of bytes to read
   */
  _read(size) {
    // Destructure the characterData properties
    const { class: charClass, gender, funFact } = this.characterData;
    // Create the formatted character description
    const description = `Character class: ${charClass}, Gender: ${gender}, Fun Fact: ${funFact}`;
    // Push the description to the readable side of the stream
    this.push(description);
    // Indicate that no more data will be pushed
    this.push(null);
  }
}

module.exports = CharacterCreator;