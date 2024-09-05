const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

function checkNumber() {
  const input = userInput.value;
  const regex = /^[1]?[-\s]?[\d]{3}[-]?[\s]?[\d]{3}[-\s]?[\d]{4}$|^[1]?[-\s]?[(][\d]{3}[)][-]?[\s]?[\d]{3}[-\s]?[\d]{4}$/;

  if (input === "") {
    window.alert("Please provide a phone number");
  } else if (regex.test(input)) {
    return results.innerHTML += `<p>Valid US number: ${userInput.value}</p>`;
  } else {
    return results.innerHTML += `<p>Invalid US number: ${userInput.value}</p>`;
  }
};

function clearResults() {
  results.innerText = "";
};

checkBtn.addEventListener("click", checkNumber);
clearBtn.addEventListener("click", clearResults);