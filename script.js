let budget = 30000;


let food = 4250;
let transport = 2420;
let rent = 5000;
let entertainment = 2800;
let saving = 3400;
let utilities = 1150;

// Collect user input

budget = Number(prompt("Enter your monthly budget in Ksh:"));

let userExpenses = Number(prompt("Enter your total expenses in Ksh:"));

// Perform budget calculation

// Reusable budget calculation function

function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

let remainingBalance = calculateRemainingBalance(budget, userExpenses);


// Display results in the console

console.log("SpendWise Budget Summary");
console.log("Monthly Budget: Ksh " + budget);
console.log("Total Expenses: Ksh " + userExpenses);
console.log("Remaining Balance: Ksh " + remainingBalance);



