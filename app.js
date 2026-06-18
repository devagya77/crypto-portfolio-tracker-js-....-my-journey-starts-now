let accountName = "Devagya";
let balance = 1000;

let transactions = [];

function showMenu() {

    console.log("====== BANK MENU ======");
    console.log("1. Check Balance");
    console.log("2. Deposit");
    console.log("3. Withdraw");
    console.log("4. History");
    console.log("=======================");
}

function deposit(amount) {

    balance += amount;

    transactions.push(
        `Deposited ₹${amount}`
    );

    console.log(`₹${amount} Added`);
}

function withdraw(amount) {

    if (amount <= balance) {

        balance -= amount;

        transactions.push(
            `Withdraw ₹${amount}`
        );

        console.log(`₹${amount} Withdrawn`);

    } else {

        console.log("Insufficient Balance");
    }

}

function checkBalance() {

    console.log(
        `${accountName} Balance: ₹${balance}`
    );

}

function showHistory() {

    console.log("===== HISTORY =====");

    if (transactions.length === 0) {

        console.log("No Transactions");

    } else {

        for (let i = 0; i < transactions.length; i++) {

            console.log(
                `${i + 1}. ${transactions[i]}`
            );

        }

    }

}

// Program Start

showMenu();

deposit(500);

withdraw(200);

withdraw(5000);

checkBalance();

showHistory();
