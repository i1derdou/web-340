/**
 * Author: David Clemens
 * Date: 2024-06-09
 * File Name: index.js
 * Description:
*/

const recipes = require('./recipes');

const ingredients = ['flour', 'sugar', 'eggs'];
console.log(recipes.createRecipe(ingredients));

const minutes = 10;
console.log(recipes.setTimer(minutes));

console.log(recipes.quit());