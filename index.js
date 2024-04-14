#! /usr/bin/env   node
import inquirer from "inquirer";
let myBalance = 22000;
let myPin = 1111;
console.log("Welcome Zainab");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin code"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("login successfully");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation",
            choices: ["withdraw", "fast cash", "balance inquiry"]
        }
    ]);
    ;
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter your amount for withdrawal"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficent balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully`);
            console.log(`your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "fast cash") {
        let fastAnswer = await inquirer.prompt([
            {
                name: "fastcash",
                message: "enter your amount",
                type: "list",
                choices: ["1000", "2000", "3000", "5000", "10000"],
            }
        ]);
        myBalance -= fastAnswer.fastcash;
        console.log(`your remaining balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "balance inquiry") {
        console.log(`your account balance is: ${myBalance}`);
    }
}
else {
    console.log("incorrect pin code");
}
