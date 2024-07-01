/**
 * Author:    David Clemens
 * Date:      2024-06-30
 * File Name: pie.js
 * Description:
 */
"use strict";

// Function to bake a pie
function bakePie(type, ingredients) {
  // Define the essential ingredients for baking a pie
  const essentialIngredients = ['flour', 'sugar', 'butter'];

  // Check if all essential ingredients are present
  for (let essential of essentialIngredients) {
    if (!ingredients.includes(essential)) {
      // Log a warning and exit if an essential ingredient is missing
      console.warn(`Warning: Missing essential ingredient: ${essential}`);
      process.exit(1);
    }
  }

  // Return a success message if all essential ingredients are present
  return `The ${type} pie was successfully baked!`;
}

// Export the bakePie function to be used in other files
module.exports = bakePie;