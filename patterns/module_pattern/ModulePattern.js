const bankAccount = (function() {
    let balance = 0;

    function changeBalance(amount){
        balance += amount;
    }

    const deposit = (amount) => {
        changeBalance(amount);
        console.log("Depositado");
    }
    

    const withdraw = (amount) => {
        if(amount > balance){
            console.log("Saldo insuficiente");
            return;
        }
        changeBalance(-amount);
        console.log(`Sacado ${amount}`);
    }

    const getBalance = () => {
        return balance;
    }

    return {
        deposit: deposit,
        withdraw: withdraw,
        getBalance: getBalance
    }

})();

bankAccount.deposit(100);
console.log(bankAccount.balance);