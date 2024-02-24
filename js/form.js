function calculateTotalPrice(order) {
  let total = 0;
  for (const item of order) {
      total += item;
  }
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); // Выведет: 138
console.log(calculateTotalPrice([164, 48, 291])); // Выведет: 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // Выведет: 1116
console.log(calculateTotalPrice([])); // Выведет: 0