
 const display = document.getElementById("display");

// Screen par values append karne ke liye
function appendValue(val) {
    display.value += val;
}

// Poora screen clear karne ke liye (C)
function clearDisplay() {
    display.value = "";
}

// Ek-ek character backspace karne ke liye (DEL)
function deleteChar() {
    display.value = display.value.slice(0, -1);
}

// Math calculation execute karne ke liye (=)
function calculate() {
    try {
        // eval() function mathematical expression ko directly solve kar deta hai
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500);
    }
}
