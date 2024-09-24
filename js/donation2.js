// donate noakhali function
let donateNoakhali = document.getElementById("btn-donation-noakhali");

donateNoakhali.addEventListener("click", function () {
  let donateNoakhali = parseFloat(document.getElementById(
    "input-donation-amount-for-noakhali"
  ).value);

  if(isNaN(donateNoakhali)) {
    alert("Invalid Input!");
    return;
  }

  let noakhaliBalance = document.getElementById("noakhaliBalance").innerText;

  let newNoakhaliBalance =
    parseFloat(noakhaliBalance) + parseFloat(donateNoakhali);

  

  let balance = parseFloat(document.getElementById("balance").innerText);

  let newBalance = balance - donateNoakhali;

  if(newBalance < 0){
    alert("Insufficient balance!");
    return;
  }else{
    document.getElementById("balance").innerText = newBalance;
    document.getElementById("noakhaliBalance").innerText = newNoakhaliBalance;
    document.getElementById('my_modal_1').showModal();
  }

  let cardTitleNoakhali = document.getElementById('card-title-noakhali').innerText;

appendFunction(donateNoakhali, cardTitleNoakhali);
});


// donate feni function
let donateFeni = document.getElementById("btn-donation-feni");

donateFeni.addEventListener("click", function () {
  let donateFeni = document.getElementById(
    "input-donation-amount-for-feni"
  ).value;

  let feniBalance = document.getElementById("feniBalance").innerText;
  let newFeniBalance = parseFloat(feniBalance) + parseFloat(donateFeni);
  document.getElementById("feniBalance").innerText = newFeniBalance;

  let balance = document.getElementById("balance").innerText;
  let newBalance = parseFloat(balance) - parseFloat(donateFeni);
  
  if(isNaN(parseFloat(donateFeni)) || newBalance < 0){
    alert("Insufficient balance! or Invalid Input!");
    return;
  }else{
    document.getElementById("balance").innerText = newBalance;
    document.getElementById("feniBalance").innerText = newFeniBalance;
    document.getElementById('my_modal_1').showModal();
  }

  let cardTitleFeni = document.getElementById('card-title-feni').innerText;

  appendFunction(donateFeni, cardTitleFeni);
});


// donate quota injured function
let donationQuotaInjured = document.getElementById(
  "btn-donation-quota-injured"
);

donationQuotaInjured.addEventListener("click", function () {
  let donateQuotaInjured = document.getElementById(
    "input-donation-amount-for-quota-injured"
  ).value;

  let quotaInjuredBalance = document.getElementById(
    "quotaInjuredBalance"
  ).innerText;
  let newQuotaInjuredBalance =
    parseFloat(quotaInjuredBalance) + parseFloat(donateQuotaInjured);
  document.getElementById("quotaInjuredBalance").innerText =
    newQuotaInjuredBalance;

  let balance = document.getElementById("balance").innerText;
  let newBalance = parseFloat(balance) - parseFloat(donateQuotaInjured);
  
  if(isNaN(parseFloat(donateQuotaInjured)) || newBalance < 0){
    alert("Insufficient balance! or Invalid Input!");
    return;
  }else{
    document.getElementById("balance").innerText = newBalance;
    document.getElementById("quotaInjuredBalance").innerText = newQuotaInjuredBalance;
    document.getElementById('my_modal_1').showModal();
  }

  let cardTitleQuotaInjured = document.getElementById('card-title-quota-injured').innerText;

  appendFunction(donateQuotaInjured, cardTitleQuotaInjured);
});
