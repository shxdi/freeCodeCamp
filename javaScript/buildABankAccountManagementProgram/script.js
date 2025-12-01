class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({ type: 'deposit', amount: amount });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else if (amount <= 0) {
      return 'Deposit amount must be greater than zero.';
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: 'withdraw', amount: amount });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else if (amount <= 0 || amount > this.balance) {
      return 'Insufficient balance or invalid amount.';
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    let depositList = 'Deposits: ';

    this.transactions.forEach((item) => {
      if (item.type === 'deposit') {
        depositList += `${item.amount},`;
      }
    });

    return depositList;
  }

  listAllWithdrawals() {
    let withdrawalList = 'Withdrawals: ';

    this.transactions.forEach((item) => {
      if (item.type === 'withdraw') {
        withdrawalList += `${item.amount},`;
      }
    });

    return withdrawalList;
  }
}

const myAccount = new BankAccount();

myAccount.deposit(150);
myAccount.withdraw(10);
myAccount.withdraw(45);
myAccount.deposit(125);
myAccount.withdraw(75);
