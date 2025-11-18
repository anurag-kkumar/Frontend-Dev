
function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    
    callback();
}

function showEndMessage() {
    console.log("hello world");
}

greetUser("Anurag", showEndMessage);
