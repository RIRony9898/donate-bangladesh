// donate noakhali function
let donateNoakhali = document.getElementById("btn-donation-noakhali");

donateNoakhali.addEventListener("click", function () {
  let donateNoakhali = document.getElementById(
    "input-donation-amount-for-noakhali"
  ).value;

  let noakhaliBalance = document.getElementById("noakhaliBalance").innerText;

  let newNoakhaliBalance =
    parseFloat(noakhaliBalance) + parseFloat(donateNoakhali);

  document.getElementById("noakhaliBalance").innerText = newNoakhaliBalance;

  let balance = document.getElementById("balance").innerText;

  let newBalance = parseFloat(balance) - parseFloat(donateNoakhali);

  document.getElementById("balance").innerText = newBalance;

  let cardTitleNoakhali = document.getElementById('card-title-noakhali').innerText;

//   // current date time
//   const currentDateTime = new Date();

//   // section history append
//   const sectionHistory = document.getElementById("section-history");

//   const createHistory = document.createElement("div");
//   createHistory.className = "card";

//   const cardBody = document.createElement("div");
//   cardBody.className = "card-body";

//   const cardTitle = document.createElement("h3");
//   cardTitle.className = "card-title";
//   cardTitle.textContent = `${donateNoakhali} Taka is Donate for Flood at Noakhali, Bangladesh`;

//   const dateTimePara = document.createElement("p");
//   dateTimePara.textContent = `${currentDateTime}`;

//   cardBody.appendChild(cardTitle);
//   cardBody.appendChild(dateTimePara);

//   createHistory.appendChild(cardBody);

//   sectionHistory.appendChild(createHistory);

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
  document.getElementById("balance").innerText = newBalance;

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
  document.getElementById("balance").innerText = newBalance;

  let cardTitleQuotaInjured = document.getElementById('card-title-quota-injured').innerText;

  appendFunction(donateQuotaInjured, cardTitleQuotaInjured);
});
