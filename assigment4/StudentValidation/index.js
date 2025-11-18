let validateField = (input, condition, errorElement, message) => {
    if (!condition) {
        input.classList.add("invalid");
        input.classList.remove("valid");
        errorElement.textContent = message;
        return false;
    } else {
        input.classList.add("valid");
        input.classList.remove("invalid");
        errorElement.textContent = "";
        return true;
    }
};

document.getElementById("form").addEventListener("submit", event => {
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let passwordError = document.getElementById("passwordError");

    let nameCheck = /^[A-Za-z\s]+$/.test(name.value);
    let emailCheck = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email.value);
    let phoneCheck = /^[0-9]{10}$/.test(phone.value);
    let passwordCheck = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/.test(password.value);

    let validName = validateField(name, nameCheck, nameError, "Invalid");
    let validEmail = validateField(email, emailCheck, emailError, "Invalid");
    let validPhone = validateField(phone, phoneCheck, phoneError, "Invalid");
    let validPassword = validateField(password, passwordCheck, passwordError, "Invalid");

    if (validName && validEmail && validPhone && validPassword) {
        alert("Submitted");
    }
});
