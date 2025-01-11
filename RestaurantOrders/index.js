"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_1 = require("./restaurants");
const orders_1 = require("./orders");
// Add your getMaxPrice() function below:
const getMaxPrice = (price) => {
    switch (price) {
        case orders_1.PriceBracket.low:
            return 10.0;
        case orders_1.PriceBracket.Medium:
            return 20.0;
        case orders_1.PriceBracket.High:
            return 30.0;
    }
};
// Add your getOrders() function below:
const getOrders = (price, orders) => {
    let filteredOrders = [];
    let restarantZero = orders[0].filter((order) => {
        return order.price <= getMaxPrice(price);
    });
    orders.forEach((restaurant) => {
        const result = restaurant.filter((order) => {
            return order.price <= getMaxPrice(price);
        });
        filteredOrders.push(result);
    });
    return filteredOrders;
};
// Add your printOrders() function below:
const printOrders = (restaurants, orders) => {
    restaurants.forEach((restaurant, index) => {
        if (orders[index].length !== null) {
            console.log(restaurant.name);
            orders[index].forEach((order) => {
                console.log(`- ${order.name} : ${order.price}`);
            });
        }
    });
};
// Main
const eligibleOrders = getOrders(orders_1.PriceBracket.low, orders_1.orders);
console.log(eligibleOrders);
printOrders(restaurants_1.restaurants, eligibleOrders);
