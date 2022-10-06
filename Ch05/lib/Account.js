class Account {
    
    constructor(bank, id, name, balance){
        this.bank = bank;
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    
    deposit(money){
        this.balance += money
    }

    withdraw(money){
        this.withdraw += money
    }

    show(){
        document.write('<P>')
        document.write('은행명 : ' + this.bank + '<br/>')
        document.write('계좌번호 : ' + this.id + '<br/>')
        document.write('입금주 : ' + this.name + '<br/>')
        document.write('현재잔액 : ' + this.balance + '<br/>')
        document.write('</P>')
    }
}