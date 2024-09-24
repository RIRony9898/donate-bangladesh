// section history append utility

let appendFunction = function (trigger, reason) {
      // current date time
  const currentDateTime = new Date();

  // section history append
  const sectionHistory = document.getElementById("section-history");

  const createHistory = document.createElement("div");
  createHistory.className = "card border my-6 border-[#1111111A] rounded-2xl gap-6";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h3");
  cardTitle.className = "card-title";
  cardTitle.textContent = `${trigger} Taka is ${reason}`;

  const dateTimePara = document.createElement("p");
  dateTimePara.textContent = `${currentDateTime}`;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(dateTimePara);

  createHistory.appendChild(cardBody);

  sectionHistory.appendChild(createHistory);
}

// btn-blog
document.getElementById('btn-blog').addEventListener('click', function(){
  window.location.href = 'blog.html';
})

// donation utility function
function handleDonation(btnId, inputId, balanceId, cardTitleId) {
  let btn = document.getElementById(btnId);
  btn.addEventListener("click", function () {
    let donationAmount = document.getElementById(inputId).value;

    if (isNaN(donationAmount) || donationAmount <= 0) {
      alert("Invalid Input!");
      return;
    }

    let currentBalance = parseFloat(document.getElementById(balanceId).innerText);
    let newBalance = currentBalance + parseFloat(donationAmount);

    let totalBalance = parseFloat(document.getElementById("balance").innerText);
    let newTotalBalance = totalBalance - donationAmount;

    if (newTotalBalance < 0) {
      alert("Insufficient balance!");
      return;
    } else {
      document.getElementById("balance").innerText = newTotalBalance;
      document.getElementById(balanceId).innerText = newBalance;
      document.getElementById('my_modal_1').showModal();
      document.getElementById(inputId).value = '';
    }

    let cardTitle = document.getElementById(cardTitleId).innerText;
    appendFunction(donationAmount, cardTitle);
  });
}