const coffeeMenu = require("./coffee_data.js");

// Print an array of all the drinks on the menu.

function name(items) {
  return items.name;
}

const itemsName = coffeeMenu.map(name);
console.log(itemsName);

// // Print an array of drinks that cost 5 and under.

function lessThanFive(cost) {
  return cost.price <= 5;
}
const fiveUnder = coffeeMenu.filter(lessThanFive);
console.log(fiveUnder);

// // Print an array of drinks that are priced at an even number.

function evenNum(evenNumber) {
  return evenNumber.price % 2 == 0;
}

const evenPrice = coffeeMenu.filter(evenNum);
console.log(evenPrice);

// Print the total if you were to order one of every drink.
// create a function for all price then function for total

function findPrice(totalPrice) {
  return totalPrice.price;
}

const priceArr = coffeeMenu.map(findPrice);
console.log(priceArr);

function total(accumulator, currentValue) {
  return accumulator + currentValue;
}

const totalCost = priceArr.reduce(total);
console.log(totalCost);

// Print an array with all the drinks that are seasonal.
function seasonalArr(seasonality) {
  return seasonality.seasonal;
}

const season = coffeeMenu.filter(seasonalArr);
console.log(season);

// Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

function name(seas) {
  return seas.name + " with imported beans";
}

const item = season.map(name);
console.log(item);
