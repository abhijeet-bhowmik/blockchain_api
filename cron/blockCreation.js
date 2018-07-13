var transPool = require('../utils/variables').transPool;
var blockPool = require('../utils/variables').blockPool;
var Block = require('../utils/variables').block;
let Operations = require('../operations/updation.js');

const cron = require('cron');
let options = {
  cronTime : '* * * * *',
  onTick : function(){
    createBlock();
  },
  start : true
};
const job = new cron.CronJob(options);
//job.start();
console.log("Block creation job running.");






let createBlock = function(){
  console.log("Checking any possible BlockPool updation.");
  if (transPool.length >= 4){
    while(transPool.length > 4){
      console.log("Creating Block");
      let transactions = transPool.splice(transPool.length-4,4);
      Operations.updatePool(transPool);
      let block = new Block(transactions);
      blockPool.push(block);
    }
    Operations.updateBlockPool(blockPool);
    console.log("Cron Job | Block created | Transactions in Pool : " + transPool.length);
    return;
  }
  else{
    return;
  }

}