
const output2 = document.getElementById("outputQ2");

function log2(msg) {
    output2.textContent += msg + "\n";
}

function runQ2() {
    output2.textContent = ""; 

    log2("Start");

    setTimeout(() => {
        log2("setTimeout callback (Macrotask)");
    }, 0);

    Promise.resolve().then(() => {
        log2("Promise.then callback (Microtask)");
    });

    log2("End");

    log2("\nExplanation:");
    log2("- Microtasks run before Macrotasks.");
    log2("- Promise.then executes before setTimeout.");
}
