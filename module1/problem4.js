function calculateGrade(score) {
    switch (true) {
      case (score >= 90):
        return 'A';
      case (score >= 80 && score <= 89):
        return 'B';
      case (score >= 70 && score <= 79):
        return 'C';
      case (score >= 60 && score <= 69):
        return 'D';
      default:
        return 'F';
    }
  }
  

console.log(calculateGrade(95)); // Output: 'A'
console.log(calculateGrade(85)); // Output: 'B'
console.log(calculateGrade(75)); // Output: 'C'
console.log(calculateGrade(65)); // Output: 'D'
console.log(calculateGrade(55)); // Output: 'F'
