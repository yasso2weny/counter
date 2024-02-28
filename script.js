// Set initial count
let count = 0;

// Select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// Accessing each button
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {

    // On click get the class name
    const styles = e.currentTarget.classList;

    // If it is the decrease class decrement and so on.
    if (styles.contains("decrease")) {
      count--;
    }
    else if (styles.contains("increase")) {
        count++;
    }
    else {
        count = 0;
    }

    // Changing the value color according to the number 
    if (count > 0) {
        value.style.color = "green";
    }
    if (count < 0) {
        value.style.color = "red";
    }
    if (count == 0) {
        value.style.color = "#222";
    }

    // Show the value on const value
    value.textContent = count;
    
  });
});
