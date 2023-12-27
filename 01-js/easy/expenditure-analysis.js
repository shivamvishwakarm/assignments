/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/


function calculateTotalSpentByCategory(transactions) {
  const totalsByCategory = {};

  for (const transaction of transactions) {
      if (totalsByCategory[transaction.category]) {
          totalsByCategory[transaction.category] += transaction.price;
          console.log(totalsByCategory[transaction.category]);
      } else {
          totalsByCategory[transaction.category] = transaction.price;
      }
  }

  return Object.entries(totalsByCategory).map(([category, totalSpent]) => ({
      category,
      totalSpent,
  }));
}


calculateTotalSpentByCategory([
  { itemName: 'item1', category: 'food', price: 100, timestamp: 1577836800000 },
  { itemName: 'item2', category: 'food', price: 200, timestamp: 1577836800000 },
  { itemName: 'item3', category: 'food', price: 300, timestamp: 1577836800000 },
]);


module.exports = calculateTotalSpentByCategory;
