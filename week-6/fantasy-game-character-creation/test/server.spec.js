/**
 * Author:    David Clemens
 * Date:      2024-07-07
 * File Name: server.spec.js
 * Description:
 */

// Import the necessary modules
const request = require('supertest'); // Supertest is used for making HTTP assertions
const express = require('express'); // Express is the web framework used
let server; // Variable to hold the server instance

// Before each test, start the server
beforeEach(() => {
  server = require('../src/server'); // Require and start the server from the source directory
});

// After each test, close the server
afterEach(() => {
  server.close(); // Close the server to free up the port
});

// Describe the tests for the POST /create-character route
describe('POST /create-character', () => {
  it('should create a character', async () => {
    // Make a POST request to the /create-character route with query parameters
    const response = await request(server)
      .post('/create-character')
      .query({ class: 'Warrior', gender: 'Male', funFact: 'Loves battles' });

    // Check if the response status is 201 (Created)
    expect(response.status).toBe(201);
    // Check if the response body contains the expected message
    expect(response.body.message).toBe('Character created');
  });
});

// Describe the tests for the POST /confirm-character route
describe('POST /confirm-character', () => {
  it('should confirm character creation', async () => {
    // Make a POST request to the /confirm-character route
    const response = await request(server)
      .post('/confirm-character');

    // Check if the response status is 200 (OK)
    expect(response.status).toBe(200);
    // Check if the response body contains the expected message
    expect(response.body.message).toBe('Character creation confirmed');
  });
});

// Describe the tests for the GET /view-character route
describe('GET /view-character', () => {
  it('should view the created character', async () => {
    // First, create a character with a POST request to the /create-character route
    await request(server)
      .post('/create-character')
      .query({ class: 'Mage', gender: 'Female', funFact: 'Loves magic' });

    // Then, make a GET request to the /view-character route
    const response = await request(server)
      .get('/view-character');

    // Check if the response status is 200 (OK)
    expect(response.status).toBe(200);
    // Check if the response body contains the expected character details
    expect(response.body.character.class).toBe('Mage');
    expect(response.body.character.gender).toBe('Female');
    expect(response.body.character.funFact).toBe('Loves magic');
  });
});