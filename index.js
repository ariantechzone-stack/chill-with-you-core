/**
 * Chill With You – Core
 * Simple utilities for focus & pomodoro
 */

function startPomodoro(minutes = 25) {
  if (typeof minutes !== "number" || minutes <= 0) {
    throw new Error("Minutes must be a positive number");
  }

  return {
    type: "pomodoro",
    duration: minutes,
    message: `Focus for ${minutes} minutes ☕`
  };
}

function breakTime(minutes = 5) {
  if (typeof minutes !== "number" || minutes <= 0) {
    throw new Error("Minutes must be a positive number");
  }

  return {
    type: "break",
    duration: minutes,
    message: `Relax for ${minutes} minutes 🌧️`
  };
}

module.exports = {
  startPomodoro,
  breakTime
};
