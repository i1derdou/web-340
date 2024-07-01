/**
 * Author:  David Clemens
 * Date:    2024-06-30
 * File Name: pie.spec.js
 * Description:
 */

"use strict";

// Import the bakePie function from the pie.js module
const bakePie = require('../src/pie');

// Describe the test suite for the bakePie function
describe('bakePie', () => {

  // Test case: Successful pie baking with all essential ingredients
  test('should bake a pie successfully with all essential ingredients', () => {
    // Call bakePie with all essential ingredients
    const result = bakePie('apple', ['flour', 'sugar', 'butter', 'apples']);
    // Expect the function to return a success message
    expect(result).toBe('The apple pie was successfully baked!');
  });

  // Test case: Missing flour
  test('should log a warning and exit when flour is missing', () => {
    // Mock console.warn and process.exit to test their calls
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const processSpy = jest.spyOn(process, 'exit').mockImplementation(() => {});

    // Call bakePie without flour
    bakePie('apple', ['sugar', 'butter', 'apples']);

    // Expect console.warn and process.exit to be called with appropriate arguments
    expect(consoleSpy).toHaveBeenCalledWith('Warning: Missing essential ingredient: flour');
    expect(processSpy).toHaveBeenCalledWith(1);

    // Restore the original implementations of console.warn and process.exit
    consoleSpy.mockRestore();
    processSpy.mockRestore();
  });

  // Test case: Missing sugar
  test('should log a warning and exit when sugar is missing', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const processSpy = jest.spyOn(process, 'exit').mockImplementation(() => {});

    bakePie('apple', ['flour', 'butter', 'apples']);

    expect(consoleSpy).toHaveBeenCalledWith('Warning: Missing essential ingredient: sugar');
    expect(processSpy).toHaveBeenCalledWith(1);

    consoleSpy.mockRestore();
    processSpy.mockRestore();
  });

  // Test case: Missing butter
  test('should log a warning and exit when butter is missing', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const processSpy = jest.spyOn(process, 'exit').mockImplementation(() => {});

    bakePie('apple', ['flour', 'sugar', 'apples']);

    expect(consoleSpy).toHaveBeenCalledWith('Warning: Missing essential ingredient: butter');
    expect(processSpy).toHaveBeenCalledWith(1);

    consoleSpy.mockRestore();
    processSpy.mockRestore();
  });
});