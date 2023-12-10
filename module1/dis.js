function calculateDistance(x1, y1, x2, y2) {
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  }
  
  function main() {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    console.log("Enter the co-ordinates of two points.");
  
    rl.question("Input:\n", (input) => {
      const [x1, y1, x2, y2] = input.split(" ").map((coord) => parseFloat(coord));
  
      const distance = calculateDistance(x1, y1, x2, y2);
      console.log("\nOutput:");
      console.log("Distance: " + distance.toFixed(2));
  
      rl.close();
    });
  }
  
  main();
