// Convert to Fahrenheit using Buttons
document.getElementById("btn_celfah").addEventListener("click", function () {
    const input = parseFloat(document.getElementById("inpval").value);
    const celtfah = convceltofah(input); // Convert to Fahrenheit
    document.getElementById("result_btns").textContent = `${celtfah.toFixed(2)}°F`;
});

// Convert to Celsius using Buttons
document.getElementById("btn_fahcel").addEventListener("click", function () {
    const input = parseFloat(document.getElementById("inpval").value);
    const fahtcel = convfahtocel(input); // Convert to Celsius
    document.getElementById("result_btns").textContent = `${fahtcel.toFixed(2)}°C`;
});

// Convert Fahrenheit to Kelvin
document.getElementById("btn_fahkel").addEventListener("click", function () {
    const input = parseFloat(document.getElementById("inpval").value);
    const fahtkel = convfahtokel(input); // Convert to Kelvin
    document.getElementById("result_btns").textContent = `${fahtkel.toFixed(2)} K`;
});

// Convert Celsius to Kelvin
document.getElementById("btn_celkel").addEventListener("click", function () {
    const input = parseFloat(document.getElementById("inpval").value);
    const celtkel = convceltokel(input); // Convert to Kelvin
    document.getElementById("result_btns").textContent = `${celtkel.toFixed(2)} K`;
});

// Convert Kelvin to Fahrenheit
document.getElementById("btn_kelfah").addEventListener("click", function () {
    const input = parseFloat(document.getElementById("inpval").value);
    const keltfah = convkeltofah(input); // Convert to Fahrenheit
    document.getElementById("result_btns").textContent = `${keltfah.toFixed(2)}°F`;
});

// Convert Kelvin to Celsius
document.getElementById("btn_kelcel").addEventListener("click", function () {
    const input = parseFloat(document.getElementById("inpval").value);
    const keltcel = convkeltocel(input); // Convert to Celsius
    document.getElementById("result_btns").textContent = `${keltcel.toFixed(2)}°C`;
});

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

