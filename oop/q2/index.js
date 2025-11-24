const menu = {
    burger: 120,
    pizza: 250,
    fries: 80,
    coke: 40
};

function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            if (!menu[item]) {
                throw new Error(`Item not found: ${item}`);
            }
            return menu[item];
        });

        const total = prices.reduce((sum, p) => sum + p, 0);

        console.log("Order:", orderItems);
        console.log("Total Bill:", total);
    } 
    catch (err) {
        console.log("❌ Error:", err.message);
    }
}

// Test Cases
calculateBill(["burger", "fries", "coke"]);
calculateBill(["pizza", "pasta"]); // pasta does not exist
