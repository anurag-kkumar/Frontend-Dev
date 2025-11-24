// Q3: MULTI-STEP FORM

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const summary = document.getElementById("summary");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

document.getElementById("next1").addEventListener("click", () => {
    if (nameInput.value.trim().length < 2) {
        alert("Enter a valid name");
        return;
    }
    step1.style.display = "none";
    step2.style.display = "block";
});

document.getElementById("next2").addEventListener("click", () => {
    if (!emailInput.value.includes("@")) {
        alert("Enter a valid email");
        return;
    }
    step2.style.display = "none";
    step3.style.display = "block";
});

document.getElementById("back1").addEventListener("click", () => {
    step2.style.display = "none";
    step1.style.display = "block";
});

document.getElementById("back2").addEventListener("click", () => {
    step3.style.display = "none";
    step2.style.display = "block";
});

document.getElementById("finishBtn").addEventListener("click", () => {
    if (passwordInput.value.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    summary.style.display = "block";
    summary.innerHTML = `
        <h3>Form Summary</h3>
        <p><strong>Name:</strong> ${nameInput.value}</p>
        <p><strong>Email:</strong> ${emailInput.value}</p>
        <p><strong>Password:</strong> ${passwordInput.value}</p>
    `;

    document.getElementById("multiForm").style.display = "none";
});
