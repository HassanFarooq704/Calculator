import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly enter your first number: "
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly enter your second number: "
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "Select operator : "
    }
]);
const { numberOne, numberTwo, operator } = answers;
let result = 0;
if (numberOne && numberTwo && operator) {
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    console.log("Your result is :", result);
}
else {
    console.log("kindly enter valid input");
}
