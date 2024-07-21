/*
 * Author:    David Clemens
 * Date:      2024-07-21
 * File Name: character-creation.spec.js
 * Description: Unit tests using Jest
 */

"use strict";

const { writeFile, readFile } = require('fs').promises;
const path = require('path');
const { createCharacter, saveCharacter, loadCharacter } = require('../src/character-creation');

const fileName = path.join(__dirname, '..', 'src', 'characters.json');

// Mock character data
const character = {
  class: 'Warrior',
  gender: 'Male',
  special: 'Loves to collect ancient relics'
};

describe('Character Creation System', () => {
  beforeAll(async () => {
    // Clean up before tests
    await writeFile(fileName, JSON.stringify([]));
  });

  test('should write character data to a file', async () => {
    await saveCharacter(character);
    const data = await readFile(fileName, 'utf8');
    const characters = JSON.parse(data);
    expect(characters).toContainEqual(character);
  });

  test('should read character data from a file', async () => {
    const characters = await loadCharacter();
    expect(characters).toContainEqual(character);
  });

  test('should handle errors when reading from the file', async () => {
    const invalidFileName = path.join(__dirname, '..', 'src', 'invalid.json');
    await expect(readFile(invalidFileName, 'utf8')).rejects.toThrow();
  });
});