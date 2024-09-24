// // donate noakhali function
// let donateNoakhali = document.getElementById("btn-donation-noakhali");

// donateNoakhali.addEventListener("click", function () {
//   let donateNoakhali = document.getElementById(
//     "input-donation-amount-for-noakhali"
//   ).value;

//   if(isNaN(donateNoakhali) || donateNoakhali<=0) {
//     alert("Invalid Input!");
//     return;
//   }

//   let noakhaliBalance = parseFloat(document.getElementById("noakhaliBalance").innerText);

//   let newNoakhaliBalance = noakhaliBalance + parseFloat(donateNoakhali);


//   let balance = parseFloat(document.getElementById("balance").innerText);

//   let newBalance = balance - donateNoakhali;

//   if(newBalance < 0){
//     alert("Insufficient balance!");
//     return;
//   }else{
//     document.getElementById("balance").innerText = newBalance;
//     document.getElementById("noakhaliBalance").innerText = newNoakhaliBalance;
//     document.getElementById('my_modal_1').showModal();
//     document.getElementById("input-donation-amount-for-noakhali").value = '';
//   }

//   let cardTitleNoakhali = document.getElementById('card-title-noakhali').innerText;

// appendFunction(donateNoakhali, cardTitleNoakhali);
// });


// // donate feni function
// let donateFeni = document.getElementById("btn-donation-feni");

// donateFeni.addEventListener("click", function () {
//   let donateFeni = document.getElementById(
//     "input-donation-amount-for-feni"
//   ).value;

//   if(isNaN(donateFeni) || donateFeni <= 0) {
//     alert("Invalid Input!");
//     return;
//   }

//   let feniBalance = parseFloat(document.getElementById("feniBalance").innerText);

//   let newFeniBalance = feniBalance + parseFloat(donateFeni);

  
//   let balance = parseFloat(document.getElementById("balance").innerText);

//   let newBalance = balance - donateFeni;
  
//   if(newBalance < 0){
//     alert("Insufficient balance!");
//     return;
//   }else{
//     document.getElementById("balance").innerText = newBalance;
//     document.getElementById("feniBalance").innerText = newFeniBalance;
//     document.getElementById('my_modal_1').showModal();
//     document.getElementById("input-donation-amount-for-feni").value = '';
//   }

//   let cardTitleFeni = document.getElementById('card-title-feni').innerText;

//   appendFunction(donateFeni, cardTitleFeni);
// });


// // donate quota injured function
// let donationQuotaInjured = document.getElementById("btn-donation-quota-injured");

// donationQuotaInjured.addEventListener("click", function () {
//   let donateQuotaInjured = document.getElementById(
//     "input-donation-amount-for-quota-injured"
//   ).value;

//   if(isNaN(donateQuotaInjured) || donateQuotaInjured <= 0) {
//     alert("Invalid Input!");
//     return;
//   }

//   // validateData(donateQuotaInjured);

//   let quotaInjuredBalance = parseFloat(document.getElementById("quotaInjuredBalance").innerText);

//   let newQuotaInjuredBalance = quotaInjuredBalance + parseFloat(donateQuotaInjured);

//   let balance = parseFloat(document.getElementById("balance").innerText);

//   let newBalance = balance - donateQuotaInjured;
  
//   if(newBalance < 0){
//     alert("Insufficient balance!");
//     return;
//   }else{
//     document.getElementById("balance").innerText = newBalance;
//     document.getElementById("quotaInjuredBalance").innerText = newQuotaInjuredBalance;
//     document.getElementById('my_modal_1').showModal();
//     document.getElementById("input-donation-amount-for-quota-injured").value = '';
//   }

//   let cardTitleQuotaInjured = document.getElementById('card-title-quota-injured').innerText;

//   appendFunction(donateQuotaInjured, cardTitleQuotaInjured);
// });



// Call the function for each donation type
handleDonation("btn-donation-noakhali", "input-donation-amount-for-noakhali", "noakhaliBalance", "card-title-noakhali");
handleDonation("btn-donation-feni", "input-donation-amount-for-feni", "feniBalance", "card-title-feni");
handleDonation("btn-donation-quota-injured", "input-donation-amount-for-quota-injured", "quotaInjuredBalance", "card-title-quota-injured");