let balance = 0;
const balanceElement = document.getElementById('balance');
const transactionsList = document.getElementById('transactions-list');

function addIncome() {
    const income = parseFloat(document.getElementById('income').value);
    balance += income;
    updateBalance();
    addTransaction('Income', income);
}

function addExpense() {
    const expense = parseFloat(document.getElementById('expense').value);
    balance -= expense;
    updateBalance();
    addTransaction('Expense', expense);
}


    function updateBalance() {
        balanceElement.textContent = balance.toFixed(2);
    }
    


function addTransaction(type, amount) {
    const transactionItem = document.createElement('li');
    transactionItem.textContent = `${type}: ₹${amount.toFixed(2)}`;
    transactionsList.appendChild(transactionItem);
}
