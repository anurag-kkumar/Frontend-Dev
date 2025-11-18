

const output1 = document.getElementById("outputQ1");

function log1(msg) {
    output1.textContent += msg + "\n";
}

function randomFail() {
    return Math.random() < 0.2;
}

function boilWater() {
    return new Promise((resolve, reject) => {
        log1("Boiling water...");
        setTimeout(() => {
            if (randomFail()) return reject("❌ Failed to boil water");
            resolve("✔ Water boiled");
        }, 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        log1("Brewing coffee...");
        setTimeout(() => {
            if (randomFail()) return reject("❌ Failed to brew coffee");
            resolve("✔ Coffee brewed");
        }, 1200);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        log1("Pouring coffee...");
        setTimeout(() => {
            if (randomFail()) return reject("❌ Failed to pour coffee");
            resolve("✔ Coffee poured");
        }, 1500);
    });
}

function runQ1() {
    output1.textContent = ""; 

    boilWater()
        .then(res => {
            log1(res);
            return brewCoffee();
        })
        .then(res => {
            log1(res);
            return pourCoffee();
        })
        .then(res => {
            log1(res);
            log1("☕ Coffee ready for the team!");
        })
        .catch(err => {
            log1(err);
            log1("⚠ Coffee process failed.");
        });
}
