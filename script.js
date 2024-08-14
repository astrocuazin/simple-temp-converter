
    const frm = document.querySelector("form");
    frm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
        const fromUnit = document.getElementById("dropdown").value;
        const toUnit = document.getElementById("dropdown2").value;
        let result;

        if (isNaN(inputTemperature)) {
            document.getElementById("result").innerText = "Please enter a valid temperature.";
            return;
        }

        // Convert the input temperature to Celsius first
        switch (fromUnit) {
            case "fahrenheit":
                result = (inputTemperature - 32) * 5 / 9;
                break;
            case "celsius":
                result = inputTemperature;
                break;
            case "kelvin": 
                result = inputTemperature - 273.15;
                break;
        }

        // Convert from Celsius to the target unit
        switch (toUnit) {
            case "fahrenheit":
                result = result * (9 / 5) + 32;
                break;
            case "celsius":
                break;
            case "kelvin":
                result = result + 273.15;
                break;
        }

        document.getElementById("result").innerText = `Result: ${result.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
    });
