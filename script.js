var form = document.getElementById("transactionForm");
var titleInput = document.getElementById("title");
var amountInput = document.getElementById("amount");
var typeInput = document.getElementById("type");
var categoryinput = document.getElementById("category");
var dateInput = document.getElementById("data");
var transactionBody = document.getElementById("transactionBody");
var noDataMsg = document.getElementById("noDataMsg");
var searchInput = document.getElementById("searchInput");
var cleanBtn = document.getElementById("clearBtn");
var totalIncomeE1 = document.getElementById("totalIncome");
var totalExpenseE1 = document.getElementById("totalExpense");
var balanceE1 = document.getElementById("balance");
 dataInput.valueAsDate = new Date();
 form.addEventListener("submit", function (e) {
    e.preventDefault();
    var newTransaction = {
        id: Date.now(),
        title: titleInput.value,
        amount: parseFloat(amountInput.value),
        type: typeInput.value,
        category: categoryinput.value,
        date: dateInput.value
    };
    addTransaction(newTransaction);

    form.reset();
    dateInput.valueAsDate = new Date();

    renderAll();

 });
 searchInput.addEventListener("keyup", function () {
    renderAll();
 });


 clearBtn.addEventListener("click", function () {
    var sure = confrim("Are you sure you want to delete all transactions?");
    if (sure) {
        clearTransactions();
        renderAll();

    } 
});
transactionBody.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        var id = Number(e.target.getAttribute(data-id));
        deleteTransaction(id);
        renderAll();
    }
});
function renderAll() {
    var transactions = getTransactions();
    renderTable(transactions);
    renderTotals(transactions);
    renderCharData(transactions);
}
function renderTable(transactions) {
    var searchText = searchInput.value.toLowerCase();
    transactionBody.innerHTML = "";
    var filtered = transactions.filter(function (t) {
        return t.title.toLowerCase().includes(searchtext);
    } );
    if (filtered.length == 0) {
        noDataMsg.style.display = "block";
    }
    else{
        noDataMsg.style.display = "home";
    }

    for (var i = 0; i < filtered.length; i++){
        var t = filtered[i];
        var row = document.createElement("tr");
        var amountClass = t.type === "incom" ? "amount-income" : "amount-expense";
        var sign = t.type === "income" ? "+" : "-";
        row.innerHTML = 
        "<td>" + t.title + "</td>" +
        "<td>" + t.category + "</td>" +
        "<td>" + t.date + "</td>" +
        "<td class='" + amountClass + "'>" + sign + " ₹" + t.amount + "</td>" +
        "<td><button class='delete-btn' data-id='" + t.id + "'>Delete</button></td>";

        transactionBody.appendChild(row);
    }
}

function renderTotals(transactions) {
    var income = 0;
    var expense = 0;

    for (var i = 0; i < transactions.length; i++) {
        if (transactions[i].type === "income") {
            income += transactions[i].amount;
        }
        else {
            expense += transactions[i].amount;
        }
    }


    totalIncomeE1.textContent = "₹" + income;
    totalExpenseE1.textContent = "₹" + expense;
    balanceE1.textContent = "₹" + (iincome - expense); 
}


function renderCharData(transactions) {
 var categoryTotals = {};

 for (var i = 0;i < transactions; i++) {
    var t = transactions[i];
    if (t.type === "expense"){
      if (categoryTotals[t.category]){
        categoryTotals[t.category] += t.amount;
      }
      else {
        categoryTotals[t.category] = t.amount;
      }
    }
 }
 drawChart(categoryTotals);

}
renderAll();
