//Bussines Logic
var balance = 0;
var deposit = 0;
var withdraw = 0;
var otherDeposit = 0;
var initialDeposit = 0;
var balance = 0;

function BankAccount(name,money){
  this.name = name;
  this.money = money;
  this.deposits = [];
  this.withdrawals = [];
};

BankAccount.prototype.calculate = function(){
  var totalDeposits = 0;
  var totalWithdrawals = 0;
  this.deposits.forEach(function(depo){
   totalDeposits += depo;
  })
  this.withdrawals.forEach(function(withdrawal){
    totalWithdrawals += withdrawal;
  })
  balance = initialDeposit + totalDeposits - totalWithdrawals;
};

//User Interface Logic
$(document).ready(function(){
  $(".registration").submit(function(event){
    event.preventDefault();
    var nameInput = $(".name").val();

    initialDeposit = parseInt($(".initial-deposit").val());

    var newAccount = new BankAccount(nameInput,initialDeposit);
    $("#holder-name").text(newAccount.name);
    $("#balance").text(newAccount.money);

    $(".deposit").submit(function(event){
      event.preventDefault();
      deposit = parseInt($(".deposit-amount").val());
      newAccount.deposits.push(deposit);
      $("#deposits").append("<li>" + deposit + "</li>");
      newAccount.calculate();
      $("#balance").text(balance);
      $(".to-deposit").show();
    });

    $(".withdraw").submit(function(event){
      event.preventDefault();
      withdraw = parseInt($(".withdraw-amount").val());
      newAccount.withdrawals.push(withdraw);
      $("#withdrawals").append("<li>" + withdraw + "</li>");
      newAccount.calculate();
      $("#balance").text(balance);
      $(".to-withdraw").show();
    });
  });
});
