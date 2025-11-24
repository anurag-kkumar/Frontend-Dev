// Q2: LIVE CHARACTER COUNTER

const textArea = document.getElementById("textArea");
const charCounter = document.getElementById("charCounter");
const resetBtn = document.getElementById("resetBtn");
const maxChars = 100;

textArea.addEventListener("input", () => {
    updateCounter();
});

textArea.addEventListener("keydown", (e) => {
    if (textArea.value.length >= maxChars && 
        e.key !== "Backspace") {
        e.preventDefault();
    }
});

function updateCounter() {
    const remaining = maxChars - textArea.value.length;

    charCounter.textContent = `${remaining} characters left`;
    charCounter.className = "";

    if (remaining <= 20 && remaining > 0) {
        charCounter.classList.add("yellow");
    } else if (remaining === 0) {
        charCounter.classList.add("red");
    }
}

resetBtn.addEventListener("click", () => {
    textArea.value = "";
    updateCounter();
});
