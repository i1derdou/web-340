/*
 * Author:    David Clemens
 * Date:      2024-07-28
 * File Name: game-characters.js
 * Description:
 */

const { spawn } = require("child_process");
const path = require("path");

// Define the GameCharacters class
class GameCharacters {
  // Constructor that accepts a script file name
  constructor(scriptFileName) {
    // Create the full path to the script file
    this.scriptPath = path.join(__dirname, scriptFileName);
  }

  // Method to get characters by spawning a child process
  getCharacters(callback) {
    // Spawn a child process to run the script
    const child = spawn("node", [this.scriptPath]);

    let data = ""; // Variable to accumulate stdout data
    let error = ""; // Variable to accumulate stderr data

    // Listen for data from the child process stdout
    child.stdout.on("data", (chunk) => {
      data += chunk; // Append data chunk to the data variable
    });

    // Listen for data from the child process stderr
    child.stderr.on("data", (chunk) => {
      error += chunk; // Append error chunk to the error variable
    });

    // Listen for the child process to close
    child.on("close", (code) => {
      if (code !== 0) {
        // If the child process exited with an error code, log the error
        console.error(`Child process exited with code ${code}`);
        callback(error, null); // Call the callback with the error
        return;
      }
      try {
        // Parse the accumulated data as JSON
        const characters = JSON.parse(data);
        callback(null, characters); // Call the callback with the parsed data
      } catch (parseError) {
        // If there is a JSON parsing error, call the callback with the error
        callback(parseError, null);
      }
    });

    // Listen for an error when spawning the child process
    child.on("error", (spawnError) => {
      // Log the error
      console.error(`Error spawning child process: ${spawnError}`);
      // Call the callback with the error
      callback(spawnError, null);
    });
  }
}

module.exports = GameCharacters;
