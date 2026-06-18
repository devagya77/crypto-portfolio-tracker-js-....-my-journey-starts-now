let walletBalance = 100000;

let portfolio = {
    Bitcoin: 0,
    Ethereum: 0,
    Solana: 0
};

let prices = {
    Bitcoin: 50000,
    Ethereum: 3000,
    Solana: 150
};

let history = [];

function showPortfolio() {

    console.log("===== PORTFOLIO =====");

    console.log("Wallet Balance: ₹" + walletBalance);

    console.log("Bitcoin:", portfolio.Bitcoin);
    console.log("Ethereum:", portfolio.Ethereum);
    console.log("Solana:", portfolio.Solana);
}

function buyCoin(coin, quantity) {

    let cost = prices[coin] * quantity;

    if(cost <= walletBalance) {

        walletBalance -= cost;

        portfolio[coin] += quantity;

        history.push(
            `Bought ${quantity} ${coin}`
        );

        console.log(`Successfully Bought ${coin}`);

    } else {

        console.log("Not Enough Balance");

    }

}

function sellCoin(coin, quantity) {

    if(quantity <= portfolio[coin]) {

        let value = prices[coin] * quantity;

        walletBalance += value;

        portfolio[coin] -= quantity;

        history.push(
            `Sold ${quantity} ${coin}`
        );

        console.log(`Successfully Sold ${coin}`);

    } else {

        console.log("Not Enough Coins");

    }

}

function totalValue() {

    let total = walletBalance;

    total += portfolio.Bitcoin * prices.Bitcoin;

    total += portfolio.Ethereum * prices.Ethereum;

    total += portfolio.Solana * prices.Solana;

    console.log("Total Net Worth: ₹" + total);

}

function showHistory() {

    console.log("===== HISTORY =====");

    for(let i = 0; i < history.length; i++) {

        console.log(
            `${i + 1}. ${history[i]}`
        );

    }

}

buyCoin("Bitcoin",1);

buyCoin("Ethereum",2);

sellCoin("Ethereum",1);

showPortfolio();

totalValue();

showHistory();
