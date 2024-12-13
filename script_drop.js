// Function to convert Celsius to Fahrenheit
function convceltofah(ctf) {
    return (ctf * 9 / 5) + 32; // Conversion formula
}

// Function to convert Fahrenheit to Celsius
function convfahtocel(ftc) {
    return (ftc - 32) * 5 / 9; // Conversion formula
}

// Function to convert Celsius to Kelvin
function convceltokel(ctk) {
    return (ctk + 273.15); // Conversion formula
}

// Function to convert Fahrenheit to Kelvin
function convfahtokel(ftk) {
    return ((ftk - 32) * 5 / 9) + 273.15; // Conversion formula
} 

// Function to convert Kelvin to Fahrenheit
function convkeltofah(ktf) {
    return ((ktf - 273.15) * 9 / 5) + 32; // Conversion formula
}

// Function to convert Kelvin to Celsius
function convkeltocel(ktc) {
    return (ktc - 273.15); // Conversion formula
}

document.getElementById("conv_btn").addEventListener("click", function() {
    const input = parseFloat(document.getElementById("inpval").value); // Get input value
    const selected = document.getElementById("options").value; // Get selected method
    const resultLabel = document.getElementById("result");

    let result;
    if (selected === "cf") {
        result = convceltofah(input); // Celsius to Fahrenheit
        resultLabel.textContent = `${input}°C is ${result.toFixed(2)} °F`;
    } else if (selected === "fc") {
        result = convfahtocel(input); // Fahrenheit to Celsius
        resultLabel.textContent = `${input}°F is ${result.toFixed(2)} °C`;
    } else if (selected === "ck") {
        result = convceltokel(input); // Fahrenheit to Celsius
        resultLabel.textContent = `${input}°C is ${result.toFixed(2)} °K`;
    } else if (selected === "fk") {
        result = convfahtokel(input); // Fahrenheit to Celsius
        resultLabel.textContent = `${input}°F is ${result.toFixed(2)} °K`;
    } else if (selected === "kf") {
        result = convkeltofah(input); // Fahrenheit to Celsius
        resultLabel.textContent = `${input}°K is ${result.toFixed(2)} °F`;
    } else if (selected === "kc") {
        result = convkeltocel(input); // Fahrenheit to Celsius
        resultLabel.textContent = `${input}°K is ${result.toFixed(2)} °C`;
    } else {
        resultLabel.textContent = "Result: Please select a conversion selected.";
    }
});