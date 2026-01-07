var maxProfit = function (prices) {
  
    let bestBuy = prices[0];
    let maxProfit = 0;
    for(let index = 1; index < prices.length; index++){
        if(prices[index] - bestBuy > maxProfit){
            maxProfit = prices[index] - bestBuy;
        }if(prices[index] < bestBuy){
            bestBuy = prices[index];
        }
    }
    return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];
// prices = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
