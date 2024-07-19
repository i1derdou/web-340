/**
 * Author:    David Clemens
 * Date:      2024-07-18
 * File Name: server.spec.js
 * Description:
 */

const http = require('http');
const server = require('../src/server'); // Import our server instance

let serverInstance;

// Helper function to make HTTP requests
const makeRequest = (options, postData = null) => {
  return new Promise((resolve, reject) => {
    const req = http.request(options, res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        resolve({ status: res.statusCode, data: JSON.parse(data) });
      });
    });

    req.on('error', error => {
      reject(error);
    });

    if (postData) {
      req.write(postData);
    }
    req.end();
  });
};

// Start the server before running the tests
beforeAll(done => {
  serverInstance = server.listen(3000, done);
});

// Close the server after running the tests
afterAll(done => {
  serverInstance.close(done);
});

describe('Character Creation Routes', () => {
  // Test for creating a character
  test('should create a character', async () => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/create',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const postData = JSON.stringify({
      class: 'Warrior',
      gender: 'Male',
      funFact: 'Brave heart',
    });

    const response = await makeRequest(options, postData);
    expect(response.status).toBe(200);
    expect(response.data.message).toBe('Character created');
  });

  // Test for confirming the character creation
  test('should confirm the character creation', async () => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/confirm',
      method: 'POST',
    };

    const response = await makeRequest(options);
    expect(response.status).toBe(200);
    expect(response.data.message).toBe('Character creation confirmed');
  });

  // Test for viewing the created character
  test('should view the created character', async () => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/view',
      method: 'GET',
    };

    const response = await makeRequest(options);
    expect(response.status).toBe(200);
    expect(response.data.character).toMatchObject({
      class: 'Warrior',
      gender: 'Male',
      funFact: 'Brave heart',
    });
  });
});