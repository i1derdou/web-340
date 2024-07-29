/*
 * Author:    David Clemens
 * Date:      2024-07-28
 * File Name: game-characters.spec.js
 * Description:
 */

const GameCharacters = require("../src/game-characters");

// Describe the test suite for GameCharacters
describe("GameCharacters", () => {
  // Test that data is returned from the game-characters-data script
  it("should return data from game-characters-data script", (done) => {
    const gameCharacters = new GameCharacters("game-characters-data.js");

    gameCharacters.getCharacters((error, data) => {
      expect(error).toBeNull(); // Expect no error
      expect(data).toBeInstanceOf(Array); // Expect data to be an array
      expect(data.length).toBe(3); // Expect the array to have 3 elements
      done();
    });
  });

  // Test that it handles an error when the script is not found
  it("should handle error when script is not found", (done) => {
    const gameCharacters = new GameCharacters("non-existent-script.js");

    gameCharacters.getCharacters((error, data) => {
      expect(error).not.toBeNull(); // Expect an error
      expect(data).toBeNull(); // Expect no data
      done();
    });
  });

  // Test that it handles an error when the script fails
  it("should handle error when script fails", (done) => {
    const gameCharacters = new GameCharacters("failing-script.js");

    gameCharacters.getCharacters((error, data) => {
      expect(error).not.toBeNull(); // Expect an error
      expect(data).toBeNull(); // Expect no data
      done();
    });
  });
});
