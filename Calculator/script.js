let display = document.getElementById("display");

function appendValue(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    if (display.innerText.length === 1) {
        display.innerText = "0";
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}

/* Bonus: Keyboard Support */
document.addEventListener("keydown", function (event) {
    if ((event.key >= '0' && event.key <= '9') || "+-*/.".includes(event.key)) {
        appendValue(event.key);
    } 
    else if (event.key === "Enter") {
        calculate();
    } 
    else if (event.key === "Backspace") {
        deleteLast();
    } 
    else if (event.key === "Escape") {
        clearDisplay();
    }
});
