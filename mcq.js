let questionsForm = document.getElementById("questionsForm");
let cityHyderabad = document.getElementById("cityHyderabad");
let cityDelhi = document.getElementById("cityDelhi");
let cityChennai = document.getElementById("cityChennai");
let cityMumbai = document.getElementById("cityMumbai");
let submitBtn = document.getElementById("submitBtn");
let resultMsg = document.getElementById("resultMsg");
let dange = "Delhi";
let dange1 = null;

cityHyderabad.addEventListener("change", function(event) {
    dange1 = event.target.value;
});
cityDelhi.addEventListener("change", function(event) {
    dange1 = event.target.value;
});
cityMumbai.addEventListener("change", function(event) {
    dange1 = event.target.value;
});
cityChennai.addEventListener("change", function(event) {
    dange1 = event.target.value;
});

function runtheFunction() {
    if (dange1 === dange) {
        resultMsg.textContent = "Correct Answer!!";
        resultMsg.style.color = "#2b9a40";
    } else if (dange1 === null) {
        resultMsg.textContent = "please select the Answer";
        resultMsg.classList.add('returmsg');
    } else {
        resultMsg.textContent = "Wrong Answer!";
        resultMsg.classList.add('returmsg');
    }
}
questionsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    runtheFunction();
});
