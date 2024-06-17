/*
 * Author: David Clemens
 * Date: 2024-06-16
 * File Name: distance-calculator.spec.js
 * Description:
*/

const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testEarthToMars() {
    try {
        const earthDistance = 1; // AU
        const marsDistance = 1.524; // AU
        const expectedDistance = 0.524; // AU
        assert.strictEqual(calculateDistance(earthDistance, marsDistance), expectedDistance);
        console.log('Passed testEarthToMars');
        return true;
    } catch (error) {
        console.error(`Failed testEarthToMars: ${error.message}`);
        return false;
    }
}

function testVenusToJupiter() {
    try {
        const venusDistance = 0.723; // AU
        const jupiterDistance = 5.204; // AU
        const expectedDistance = 4.481; // AU
        assert.strictEqual(calculateDistance(venusDistance, jupiterDistance), expectedDistance);
        console.log('Passed testVenusToJupiter');
        return true;
    } catch (error) {
        console.error(`Failed testVenusToJupiter: ${error.message}`);
        return false;
    }
}

function testMercuryToNeptune() {
    try {
        const mercuryDistance = 0.39; // AU
        const neptuneDistance = 30.1; // AU
        const expectedDistance = 29.71; // AU
        assert.strictEqual(calculateDistance(mercuryDistance, neptuneDistance), expectedDistance);
        console.log('Passed testMercuryToNeptune');
        return true;
    } catch (error) {
        console.error(`Failed testMercuryToNeptune: ${error.message}`);
        return false;
    }
}

// Run the tests
testEarthToMars();
testVenusToJupiter();
testMercuryToNeptune();

