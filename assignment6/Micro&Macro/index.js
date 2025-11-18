
const output3 = document.getElementById("outputQ3");

function log3(msg) {
    output3.textContent += msg + "\n";
}

function getBugs() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.3;

        setTimeout(() => {
            if (fail) {
                reject("❌ API error: Unable to fetch bugs.");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

function runQ3() {
    output3.textContent = ""; 

    getBugs()
        .then(bugs => {
            log3("🐞 Bug List Retrieved:");
            log3("-----------------------");

            bugs.forEach(bug => log3("• " + bug));
        })
        .catch(err => {
            log3(err);
        });
}
