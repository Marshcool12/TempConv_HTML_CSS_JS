// Function to convert Celsius to Fahrenheit
function convtofah(celsius) {
    return (celsius * 9 / 5) + 32; // Conversion formula
}

// Function to convert Fahrenheit to Celsius
function convtocel(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9; // Conversion formula
}

// Convert using Radio Buttons
document.getElementById("conv_btn").addEventListener("click", function() {
    const input = parseFloat(document.getElementById("inpval").value); // Get input value
    const radios = document.getElementsByName("Temp");
    let selected_radio = null;

    // Loop through radio buttons to find the selected one
    for (const radio of radios) {
        if (radio.checked) {
            selected_radio = radio.value;
            break;
        }
    }

    const result = document.getElementById("result");

    // Perform conversion based on the selected radio button
    if (selected_radio === "Fahrenheit") {
        const fahrenheit = convtofah(input);
        result.textContent = `${fahrenheit.toFixed(2)}°F`;
    } else if (selected_radio === "Celsius") {
        const celsius = convtocel(input);
        result.textContent = `${celsius.toFixed(2)}°C`;
    } else {
        result.textContent = "Please select a conversion option!";
    }
});
