// Get elements from the DOM
const balanceAmount = document.getElementById('balance-amount');
const transactionList = document.getElementById('transaction-list');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const addIncomeBtn = document.getElementById('add-income-btn');
const addExpenseBtn = document.getElementById('add-expense-btn');

let balance = 0;

// Function to add a transaction
function addTransaction(description, amount, type) {
  const transaction = document.createElement('li');
  transaction.innerHTML = `${description} <span class="${type}">$${amount.toFixed(2)}</span>`;
  transactionList.appendChild(transaction);

  if (type === 'income') {
    balance += amount;
  } else if (type === 'expense') {
    balance -= amount;
  }

  balanceAmount.textContent = balance.toFixed(2);
}

// Event listener for add income button
addIncomeBtn.addEventListener('click', function() {
  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);

  if (description.trim() !== '' && amount) {
    addTransaction(description, amount, 'income');
    descriptionInput.value = '';
    amountInput.value = '';
  }
});

// Event listener for add expense button
addExpenseBtn.addEventListener('click', function() {
  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);

  if (description.trim() !== '' && amount) {
    addTransaction(description, amount, 'expense');
    descriptionInput.value = '';
    amountInput.value = '';
  }
});
