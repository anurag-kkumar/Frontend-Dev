
const productInput = document.getElementById("productInput");
const addProductBtn = document.getElementById("addProductBtn");
const productList = document.getElementById("productList");

let currentlyEditing = null;

addProductBtn.addEventListener("click", () => {
    const productName = productInput.value.trim();
    if (!productName) return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="name">${productName}</span>
        <div>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        </div>
    `;

    productList.appendChild(li);
    productInput.value = "";
});

productList.addEventListener("click", (e) => {
    const parentLi = e.target.closest("li");

    if (e.target.classList.contains("deleteBtn")) {
        parentLi.remove();
    }

    if (e.target.classList.contains("editBtn")) {
        enableEdit(parentLi);
    }
});

function enableEdit(li) {
    if (currentlyEditing) saveEdit();

    const span = li.querySelector(".name");
    currentlyEditing = span;

    const input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;

    li.replaceChild(input, span);
    input.focus();
}

document.addEventListener("click", (e) => {
    if (currentlyEditing && !e.target.closest("li")) {
        saveEdit();
    }
});

function saveEdit() {
    const input = currentlyEditing;
    const value = input.value.trim() || "Untitled";

    const span = document.createElement("span");
    span.className = "name";
    span.textContent = value;

    input.parentElement.replaceChild(span, input);
    currentlyEditing = null;
}
