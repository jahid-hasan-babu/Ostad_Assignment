function generateMultiplicationTable(number) {
    console.log(`Generate Multiplication Table for: ${number}\n`);
    for (let i = 1; i <= 10; i++) {
      const result = number * i;
      console.log(`${i} x ${number} = ${result}`);
    }
  }


  const userInput = 5;
  const number = parseInt(userInput);


  if (!isNaN(number)) {
    generateMultiplicationTable(number);
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }



