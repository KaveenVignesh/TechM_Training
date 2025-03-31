const chooseOperation = () => {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a/b;

    let operation = "divide"; // Change this to "subtract", "multiply", or "divide" for testing
   a = 10, b = 5;

    switch (operation) {
        case "add":
            console.log("Sum: "+add(a, b));
            break;
        case "subtract":
            console.log("Difference: "+subtract(a, b));
            break;
        case "multiply":
            console.log("Product: "+multiply(a, b));
            break;
        case "divide":
            console.log("Divide : "+divide(a, b));
            break;
        default:
            console.log("Invalid operation");
    }
}
chooseOperation();