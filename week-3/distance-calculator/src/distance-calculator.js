/*
 * Author: David Clemens
 * Date: 2024-06-16
 * File Name: distance-calculator.js
 * Description:
*/

function calculateDistance(planet1Distance, planet2Distance) {
  // Implement this function
  const distance = Math.abs(planet1Distance - planet2Distance);
  return distance;
}

module.exports = calculateDistance;