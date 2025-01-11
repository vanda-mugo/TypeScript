import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

// Add your getMaxPrice() function below:
const getMaxPrice = (price : PriceBracket):number =>{
  switch(price){
    case PriceBracket.low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 30.0;
  }
};
// Add your getOrders() function below:
const getOrders = (price : PriceBracket , orders : Order[][] ) :Order[][] =>{
  let filteredOrders : Order[][] = [];
  let restarantZero = orders[0].filter((order:Order ) =>{
    return order.price <= getMaxPrice(price);
  });

  orders.forEach((restaurant : Order[]) => {
    const result = restaurant.filter((order : Order) => {
      return order.price <= getMaxPrice(price);
    });
    filteredOrders.push(result);
  });
return filteredOrders
};

// Add your printOrders() function below:
const printOrders = (restaurants : Restaurant[], orders : Order[][]):void => {
  restaurants.forEach((restaurant:Restaurant, index : number)=>{
    if(orders[index].length !== null){
      console.log(restaurant.name);
      orders[index].forEach((order) => {
        console.log(`- ${order.name} : ${order.price}`);
      });
    }
  });
};

// Main
const eligibleOrders = getOrders(PriceBracket.low, orders);
console.log(eligibleOrders);
printOrders(restaurants, eligibleOrders);
