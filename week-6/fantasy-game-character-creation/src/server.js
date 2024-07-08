/**
 * Author:    David Clemens
 * Date:      2024-07-07
 * File Name: server.js
 * Description:
 */
"use strict";

const express = require('express');
const app = express();
const port = 3000;

let character = null;

app.use(express.json());

/**
 * POST route for creating a character.
 * Accepts query parameters for class, gender, and funFact.
 */
app.post('/create-character', (req, res) => {
  const { class: characterClass, gender, funFact } = req.query;
  character = { class: characterClass, gender, funFact };
  res.status(201).json({ message: 'Character created' });
});

/**
 * POST route for confirming the character creation.
 */
app.post('/confirm-character', (req, res) => {
  if (character) {
    res.status(200).json({ message: 'Character creation confirmed' });
  } else {
    res.status(400).json({ message: 'No character to confirm' });
  }
});

/**
 * GET route for viewing the character.
 * Returns the character created in the create-character route.
 */
app.get('/view-character', (req, res) => {
  if (character) {
    res.status(200).json({ character });
  } else {
    res.status(404).json({ message: 'No character found' });
  }
});

/**
 * Start the server and listen on port 3000.
 */
const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = server;
