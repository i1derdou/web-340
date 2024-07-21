/*
 * Author:    David Clemens
 * Date:      2024-07-21
 * File Name: character-creation.js
 * Description:
 */

"use strict";

const { writeFile, readFile } = require('fs').promises;
const path = require('path');
const fileName = path.join(__dirname, 'characters.json');

// Function to create a new character
const createCharacter = (characterClass, gender, special) => ({
  class: characterClass,
  gender: gender,
  special: special
});

// Function to save character data to a file
const saveCharacter = async (character) => {
  try {
    const data = await readFile(fileName, 'utf8');
    const characters = JSON.parse(data);
    characters.push(character);
    await writeFile(fileName, JSON.stringify(characters));
  } catch (error) {
    console.error('Error saving character:', error);
  }
};

// Function to load character data from a file
const loadCharacter = async () => {
  try {
    const data = await readFile(fileName, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading character:', error);
    return [];
  }
};

module.exports = { createCharacter, saveCharacter, loadCharacter };
