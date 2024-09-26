console.log("java works")
// Convert Decimal to Binary and Hexadecimal
function convertDecimal() {
    let decimalValue = document.getElementById('decimalInput').value;

    if (!isNaN(decimalValue) && decimalValue !== '') {
        let hexValue = parseInt(decimalValue, 10).toString(16).toUpperCase();
        let binaryValue = parseInt(decimalValue, 10).toString(2);
        document.getElementById('results').innerHTML = `Decimal: ${decimalValue}<br>Hexadecimal: ${hexValue}<br>Binary: ${binaryValue}`;
    } else {
        document.getElementById('results').innerHTML = "Please enter a valid decimal number.";
    }
}

// Convert Hexadecimal to Decimal and Binary
function convertHex() {
    let hexValue = document.getElementById('hexInput').value;

    if (/^[0-9A-Fa-f]+$/.test(hexValue)) {
        let decimalValue = parseInt(hexValue, 16);
        let binaryValue = decimalValue.toString(2);
        document.getElementById('results').innerHTML = `Hexadecimal: ${hexValue.toUpperCase()}<br>Decimal: ${decimalValue}<br>Binary: ${binaryValue}`;
    } else {
        document.getElementById('results').innerHTML = "Please enter a valid hexadecimal number.";
    }
}

// Convert Binary to Decimal and Hexadecimal
function convertBinary() {
    let binaryValue = document.getElementById('binaryInput').value;

    if (/^[01]+$/.test(binaryValue)) {
        let decimalValue = parseInt(binaryValue, 2);
        let hexValue = decimalValue.toString(16).toUpperCase();
        document.getElementById('results').innerHTML = `Binary: ${binaryValue}<br>Decimal: ${decimalValue}<br>Hexadecimal: ${hexValue}`;
    } else {
        document.getElementById('results').innerHTML = "Please enter a valid binary number.";
    }
}