// Appends a value to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Clears the entire display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Deletes the last character in the display
function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Calculates the result of the entered expression
function calculateResult() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Handles keyboard input
document.addEventListener("keydown", (event) => {
    const key = event.key;
    const display = document.getElementById("display");

    // Allow numbers, operators, and dot
    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendToDisplay(key);
    }

    // Enter key to calculate the result
    if (key === "Enter") {
        calculateResult();
    }

    // Backspace key to delete the last character
    if (key === "Backspace") {
        deleteLast();
    }

    // Escape key to clear the display
    if (key === "Escape") {
        clearDisplay();
    }
});
