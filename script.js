document.getElementById("dec-btn").addEventListener("click", decFunction);
document.getElementById("reset-btn").addEventListener("click", resetFunction);
document.getElementById("inc-btn").addEventListener("click", incFunction);

var display = document.getElementById("num");
var count = parseInt(display.textContent, 10);

function updateColor() {
    if (count > 0) {
        display.style.color = "green";
    } else if (count == 0) {
        display.style.color = "black";
    } else {
        display.style.color = "red";
    }
}

function decFunction() { 
    count -= 1;
    display.textContent = count; 
    updateColor();
}
function resetFunction() {
    count = 0;
    display.textContent = count; 
    updateColor();
}

function incFunction() {
    count += 1;
    display.textContent = count; 
    updateColor();
}