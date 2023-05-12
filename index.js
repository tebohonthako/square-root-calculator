// Try staement defines the code block to run
try {
  if (Number < 0) {
    throw new Error(
      "Sorry, I cannot calculate the square root of a negative number!"
    );
  }

  // Catch statement defines code block to handle error.
} catch (error) {
  console.log(error.message);
}
console.log("Whoops, Cannot calculate the sqaure root of a negative number");

// Function calculating the square root of a given number.
function valueButton(e) {
  calculatorForm.screen.value += e.value;
}
function Calculate() {
  calculatorForm.screen.value = Math.sqrt(calculatorForm.screen.value);
}

// const Number = prompt("Enter valid number: ");
const result = Calculate(Number);
console.log(result);
