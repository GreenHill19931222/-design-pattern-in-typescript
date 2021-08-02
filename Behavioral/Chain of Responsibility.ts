abstract class Account {
  protected successor: any;
  protected balance: number = 0;
  setNext(account: Account) {
    this.successor = account;
  }
  pay(amountToPay: number) {
    if (this.canPay(amountToPay)) {
      console.log(`Paid ${amountToPay} using ${this.constructor.name}`);
    } else if (this.successor) {
      console.log(`Cannot pay using ${this.constructor.name} Proceeding ..`);
      this.successor.pay(amountToPay);
    } else {
      throw new Error("None of the accounts have enough balance");
    }
  }
  canPay(amount: number): boolean {
    return this.balance >= amount;
  }
}

class Bank extends Account {
  protected balance: number;
  constructor(balance: number) {
    super();
    this.balance = balance;
  }
}

class Paypal extends Account {
  protected balance: number;
  constructor(balance: number) {
    super();
    this.balance = balance;
  }
}
class Bitcoin extends Account {
  protected balance: number;
  constructor(balance: number) {
    super();
    this.balance = balance;
  }
}

export default function sampleChainOfResponsibility() {
  // 建立如下的一個連結
  //      $bank->$paypal->$bitcoin
  //
  // 優先使用銀行帳戶
  //      如果銀行帳戶無法支付再用 paypal
  //      如果 paypal 不能支持再用比特幣

  const bank = new Bank(100);
  const paypal = new Paypal(200);
  const bitcoin = new Bitcoin(300);

  bank.setNext(paypal);
  paypal.setNext(bitcoin);

  bank.pay(259);
}
