function getTransactions() {
    let data = localStorage.getItem("transactions");
    if (data == null) {
        return [];
    } else {
        return JSON.parse(data);
    }
}

function saveTransactions(transactions) {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}
function addTransaction(transaction) {
    let transactions = getTransactions();
    transactions.push(transaction);
    saveTransactions(transactions);
}
function deleteTransaction(id) {
    let transactions = getTransactions();
    transactions = transactions.filter(function (t) {
        return t.id !== id;
    });
    saveTransactions(transactions);

}
function clearTransactions() {
    localStorage.removeItem("transcations");
}