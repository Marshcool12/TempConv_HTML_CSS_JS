// Function to convert Celsius to Fahrenheit
function convtofah(celsius) {
    return (celsius * 9 / 5) + 32; // Conversion formula
}

// Function to convert Fahrenheit to Celsius
function convtocel(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9; // Conversion formula
}

document.getElementById("conv_btn").addEventListener("click", function() {
    const input = parseFloat(document.getElementById("inpval").value); // Get input value
    const selected = document.getElementById("options").value; // Get selected method
    const resultLabel = document.getElementById("result");

    let result;
    if (selected === "op_fah") {
        result = convtofah(input); // Celsius to Fahrenheit
        resultLabel.textContent = `${result.toFixed(2)} °F`;
    } else if (selected === "op_cel") {
        result = convtocel(input); // Fahrenheit to Celsius
        resultLabel.textContent = `${result.toFixed(2)} °C`;
    } else {
        resultLabel.textContent = "Result: Please select a conversion selected.";
    }
});