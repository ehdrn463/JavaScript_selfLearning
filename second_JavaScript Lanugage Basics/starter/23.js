/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

var bills = [124, 48, 268];

function calTip(price){
    if (price < 50) {
        return price * 0.2;
    } else if (price >= 50 && price < 200){
        return price * 0.15;
    } else {
        return price * 0.1;
    }
};

var tips = [];
for (var i = 0; i < bills.length; i++){
    var tip = calTip(bills[i]);
    tips.push(tip);
}
console.log('팁 가격 ' + tips)

var total_prices = [];
for (var i = 0; i < bills.length; i++){
    var price = tips[i] + bills[i];
    total_prices.push(price);
}
console.log('최종 가격 ' + total_prices)