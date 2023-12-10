function calculateDiscountedAmount(totalPurchaseAmount) {
  let discountPercentage = 0;
  
  if (totalPurchaseAmount >= 50 && totalPurchaseAmount <= 100) {
    discountPercentage = 0.05; // 5% discount
  } else if (totalPurchaseAmount > 100 && totalPurchaseAmount <= 200) {
    discountPercentage = 0.10; // 10% discount
  } else if (totalPurchaseAmount > 200) {
    discountPercentage = 0.15; // 15% discount
  }

  const discountAmount = totalPurchaseAmount * discountPercentage;
  const finalAmount = totalPurchaseAmount - discountAmount;

  console.log(`Total Purchase Amount: $${totalPurchaseAmount.toFixed(2)}`);
  console.log(`Discounted Amount: $${discountAmount.toFixed(2)}`);
  console.log(`Final Amount after Discount: $${finalAmount.toFixed(2)}`);
}

// Test the function with different total purchase amounts
calculateDiscountedAmount(30);    // No discount
calculateDiscountedAmount(70);    // 5% discount
calculateDiscountedAmount(150);   // 10% discount
calculateDiscountedAmount(250);   // 15% discount
