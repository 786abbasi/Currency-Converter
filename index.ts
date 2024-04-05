#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
  USD: 1, //Base currency
  INR: 83.29, //Indian Rupees
  PKR: 278, //Pakistani Rupees
  SAR: 3.71, //Saudi Riyal
  CHF: 0.9, //Swiss France
  GBP: 0.79, //British Pound
};

let userAnswer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from currency",
    type: "list",
    choices: ["USD", "INR", "PKR", "SAR", "CHF", "GBP"],
  },
  {
    name: "to",
    message: "Enter to currency",
    type: "list",
    choices: ["USD", "INR", "PKR", "SAR", "CHF", "GBP"],
  },
  {
    name: "Amount",
    message: "Enter your Amount",
    type: "number",
  },
]);

let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let Amount = userAnswer.Amount;
let baseAmount = Amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
