// Convert to Fahrenheit using Buttons
document.getElementById("btn_fah").addEventListener("click", function () {
    const input = document.getElementById("inpval").value;
    const fahrenheit = convtofah(input); // Convert to Fahrenheit
    document.getElementById("result_btns").textContent = `${fahrenheit.toFixed(2)}°F`;
});

// Function to convert Celsius to Fahrenheit
function convtofah(celsius) {
    return (celsius * 9 / 5) + 32; // Conversion formula
}

// Convert to Celsius using Buttons
document.getElementById("btn_cel").addEventListener("click", function () {
    const input = document.getElementById("inpval").value;
    const celsius = convtocel(input); // Convert to Celsius
    document.getElementById("result_btns").textContent = `${celsius.toFixed(2)}°C`;
});

// Function to convert Fahrenheit to Celsius
function convtocel(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9; // Conversion formula
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("conv_btn").addEventListener("click", function () {
        const input = parseFloat(document.getElementById("inpval").value);
        const radios = document.getElementsByName("Temp");
        let selectedValue = null;

        for (const radio of radios) {
            if (radio.checked) {
                selectedValue = radio.value;
                break;
            }
        }

        const resultLabel = document.getElementById("result");

        if (selectedValue === "Fahrenheit") {
            const fahrenheit = convtofah(input);
            resultLabel.textContent = `${fahrenheit.toFixed(2)}°F`;
        } else if (selectedValue === "Celsius") {
            const celsius = convtocel(input);
            resultLabel.textContent = `${celsius.toFixed(2)}°C`;
        } else {
            resultLabel.textContent = "Please select a conversion option!";
        }
    });

    function convtofah(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    function convtocel(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
});
