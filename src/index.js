const plugin             = require('tailwindcss/plugin');
const base               = require('../dist/base.json');
const { default: chalk } = require('chalk');

module.exports = plugin(function({ addUtilities, addBase, addComponents }) {
  console.log(`${chalk.bgGreenBright('INIT')} ${chalk.bold('Funny.CSS')} initialization...`)
  addUtilities(base);
  console.log(`${chalk.bgGreenBright('INIT')} ${chalk.bold('Funny.CSS')} initialized...`)
});