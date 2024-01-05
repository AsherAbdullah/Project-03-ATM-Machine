
import inquirer from "inquirer";

interface UserInput {
    userID: string,
    userPIN: number,
    accountType: string,
    transactionType: string,
    amount: number;
}

const userInput = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Enter User ID"
    },
    {
        type: "number",
        name: "userPIN",
        message: "Enter your PIN"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select Your Account Type"
    },
    {
        type: "list",
        name: "transactioType",
        choices: ["Fast Cash", "Cash Withdraw", "Balance Inquiry"]
    },
    {
        type: "number",
        name: "amount",
        message: "Enter amount you want to withdraw",
        when(userInput){
            return userInput.transactionType === "Cash Withdraw";
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 5000, 10000, 20000, 25000],
        message: "Select amount you want to withdraw",
        when(userInput){
            return userInput.transactioType === "Fast Cash"
        }
    }
]);

// making variable of user input data

const userID = userInput.userID;
const userPIN = userInput.userPIN;
const enteredAmount = userInput.amount;

if((userID && userPIN) && userInput.transactionType == "Balance inquiry" ){
    const userBalance = Math.floor(Math.random() * 100000);
    console.log(`Your current balance is Rs ${userBalance}\n`)
}else if(userID && userPIN){
    const userBalance2 = Math.floor(Math.random() * 100000);
    if(userBalance2 > enteredAmount){
        console.log(`Your account has been debited with Rs ${enteredAmount} and your
        remaining balance is ${userBalance2 - enteredAmount}`);
    }else{
        console.log(`\n Unsufficient Balance` );
    }
};