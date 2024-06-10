/**
 * Author: David Clemens  
 * Date: 2024-06-09
 * File Name: recipes.js
 * Description:
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  // Implement this function
  return `Recipe created with ingredients: ${ingredients.join(', ')}`;
}

// Define the setTimer function
function setTimer(minutes) {
  // Implement this function
  return `Timer set for ${minutes} minutes.`;
}

// Define the quit function
function quit() {
  // Implement this function
  return 'Program exited';
}

// Export the functions
module.exports = {
  createRecipe,
  setTimer,
  quit
};