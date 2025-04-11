// colorful-message.js
const chalk = require('chalk');

function displayMessage() {
  console.log(chalk.blue.bgYellow.bold('This is a colorful message!'));
}

module.exports = displayMessage;
