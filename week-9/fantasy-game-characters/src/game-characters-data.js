/*
 * Author:    David Clemens
 * Date:      2024-07-28
 * File Name: game-characters-data.js
 * Description: Contains an array of game characters for processing
 */

// Array of game characters
const characters = [
  {
      class: 'Warrior',
      gender: 'Male',
      uniqueProperty: 'Wields a giant sword'
  },
  {
      class: 'Mage',
      gender: 'Female',
      uniqueProperty: 'Casts powerful spells'
  },
  {
      class: 'Rogue',
      gender: 'Other',
      uniqueProperty: 'Expert in stealth'
  }
];

// Log the characters array as a JSON string
console.log(JSON.stringify(characters));