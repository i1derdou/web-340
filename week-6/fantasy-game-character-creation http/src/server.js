/**
 * Author:    David Clemens
 * Date:      2024-07-18
 * File Name: server.js
 * Description:
 */
"use strict";

const http = require('http');
const url = require('url');

// This variable will store our character data
let character = null;

// Request listener to handle different routes
const requestListener = (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (req.method === 'POST' && parsedUrl.pathname === '/create') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const { class: charClass, gender, funFact } = JSON.parse(body);
      character = { class: charClass, gender, funFact };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Character created' }));
    });

  } else if (req.method === 'POST' && parsedUrl.pathname === '/confirm') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Character creation confirmed' }));

  } else if (req.method === 'GET' && parsedUrl.pathname === '/view') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ character }));

  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
};

// Create the server instance
const server = http.createServer(requestListener);

module.exports = server;

// If this file is run directly, start the server
if (require.main === module) {
  server.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}