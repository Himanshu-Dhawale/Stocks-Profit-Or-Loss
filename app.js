const initialPrice = document.querySelector('#Initial-Price');
const stocksQuantity = document.querySelector('#Stocks-Quantity');
const currentPrice = document.querySelector('#Current-Price');
const submitbtn = document.querySelector('#submit-btn');
const ouputBox = document.querySelector('#output-box');


submitbtn.addEventListener('click', submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);

}


function calculateProfitAndLoss(initial, quantity, current){
   if(initial > current ) {
       var loss = (initial - current) * quantity;
       var lossPercentage = (loss / initial) * 100;

       showOutput(`Hey, the loss is ${loss} and the loss percent is ${lossPercentage}%`)
   }else if (current > initial){
      var profit = (current - initial) * quantity;
      var profitPercentage = (profit / initial) * 100;

      showOutput(`Hey, the profit is ${profit} and the profit percent is ${profitPercentage}%`)

   }else{
       showOutput('No Pain No Gain And No Gain No Pain');
   }
}

// calculateProfitAndLoss(100, 20, 50);
// calculateProfitAndLoss(100, 20, 4000);
// calculateProfitAndLoss(10, 10, 10);

function showOutput (message){
    ouputBox.innerHTML = message;
}