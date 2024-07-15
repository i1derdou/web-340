/**
 * Author:    David Clemens
 * Date:      2024-07-14
 * File Name: character-creator.spec.js
 * Description: Unit tests for the CharacterCreator class using Jest
 */

const CharacterCreator = require('../src/character-creator');
const { PassThrough } = require('stream');

describe('CharacterCreator', () => {
  let characterCreator;

  // Initialize a new CharacterCreator instance before each test
  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  /**
   * Test if CharacterCreator processes data correctly when written to
   */
  test('processes data correctly', (done) => {
    const input = new PassThrough(); // Create a PassThrough stream to simulate input
    input.pipe(characterCreator); // Pipe the input stream to the characterCreator instance

    // Write valid data chunks to the input stream
    input.write('class: Warrior\n');
    input.write('gender: Male\n');
    input.write('funFact: Loves to sing\n');
    input.end(); // End the input stream

    let result = ''; // Variable to accumulate the output data
    characterCreator.on('data', (chunk) => {
      result += chunk.toString(); // Collect data chunks from the output stream
    });

    characterCreator.on('end', () => {
      // Verify the final output after the stream ends
      expect(result).toBe('Character class: Warrior, Gender: Male, Fun Fact: Loves to sing');
      done(); // Signal that the test is complete
    });
  });

  /**
   * Test if CharacterCreator emits an error event when an empty string is written to it
   */
  test('emits error on invalid data', (done) => {
    // Listen for the error event
    characterCreator.on('error', (err) => {
      expect(err).toBeInstanceOf(Error); // Verify that an Error object is emitted
      expect(err.message).toBe('Invalid data'); // Verify the error message
      done(); // Signal that the test is complete
    });

    characterCreator.write('class: '); // Write invalid data to trigger the error
  });

  /**
   * Test if CharacterCreator transforms the data correctly when written to
   */
  test('transforms data correctly', (done) => {
    const input = new PassThrough(); // Create a PassThrough stream to simulate input
    input.pipe(characterCreator); // Pipe the input stream to the characterCreator instance

    // Write valid data chunks to the input stream
    input.write('class: Mage\n');
    input.write('gender: Female\n');
    input.write('funFact: Enjoys painting\n');
    input.end(); // End the input stream

    let result = ''; // Variable to accumulate the output data
    characterCreator.on('data', (chunk) => {
      result += chunk.toString(); // Collect data chunks from the output stream
    });

    characterCreator.on('end', () => {
      // Verify the final output after the stream ends
      expect(result).toBe('Character class: Mage, Gender: Female, Fun Fact: Enjoys painting');
      done(); // Signal that the test is complete
    });
  });

  /**
   * Test if CharacterCreator emits an error event when an invalid key is written to it
   */
  test('emits error on invalid key', (done) => {
    // Listen for the error event
    characterCreator.on('error', (err) => {
      expect(err).toBeInstanceOf(Error); // Verify that an Error object is emitted
      expect(err.message).toBe('Invalid key'); // Verify the error message
      done(); // Signal that the test is complete
    });

    characterCreator.write('invalidKey: some value'); // Write data with an invalid key to trigger the error
  });
});