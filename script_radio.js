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
    if (selected_radio === "cf") {
        const celtfah = convceltofah(input);
        result.textContent = `${input}°C is ${celtfah.toFixed(2)}°F`;
    } else if (selected_radio === "fc") {
        const fahtcel = convfahtocel(input);
        result.textContent = `${input}°F is ${fahtcel.toFixed(2)}°C`;
    } else if (selected_radio === "ck") {
        const celtkel = convceltokel(input);
        result.textContent = `${input}°C is ${celtkel.toFixed(2)}°K`;
    } else if (selected_radio === "fk") {
        const fahtkel = convfahtokel(input);
        result.textContent = `${input}°F is ${fahtkel.toFixed(2)}°K`;
    } else if (selected_radio === "kf") {
        const keltfah = convkeltofah(input);
        result.textContent = `${input}°K is ${keltfah.toFixed(2)}°F`;
    } else if (selected_radio === "kc") {
        const keltcel = convkeltocel(input);
        result.textContent = `${input}°K is ${keltcel.toFixed(2)}°C`;
    } else {
        result.textContent = "Please select a conversion option!";
    }
});
