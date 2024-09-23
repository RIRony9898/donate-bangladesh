// section history append utility

let appendFunction = function (trigger, reason) {
      // current date time
  const currentDateTime = new Date();

  // section history append
  const sectionHistory = document.getElementById("section-history");

  const createHistory = document.createElement("div");
  createHistory.className = "card";
  createHistory.className = "border";
//   createHistory.className = "my-6";
//   createHistory.className = "border-[#1111111A]";
//   createHistory.className = "rounded-2xl";
//   createHistory.className = "gap-6";

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

// btn-modal
document.getElementById("btn-modal").addEventListener("click", function () {
//   document.getElementById("my_modal_1").classList.add("hidden");
  window.location.href = 'index.html';
});