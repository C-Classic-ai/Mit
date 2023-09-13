document.getElementById("calculate").addEventListener("click", () => {
    try {
        const operation = document.getElementById("operation").value;
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);

        let result;

        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "multiply":
                result = num1 * num2;
                break;
            case "divide":
                if (num2 === 0) {
                    throw new Error("Division by zero is not allowed.");
                }
                result = num1 / num2;
                break;
            default:
                throw new Error("Invalid operation");
        }

        const answerElement = document.getElementById("answer");
        answerElement.textContent = result;
    } catch (error) {
        const answerElement = document.getElementById("answer");
        answerElement.textContent = `Error: ${error.message}`;
    }
});

document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("answer").textContent = "";
});
