let Updations = require('../operations/updation.js');
let blockPool = require('../utils/variables').blockPool;
let blockchain = require('../utils/variables').blockchain;
const cron = require('cron');
let blockchainOps = require('../operations/blockchainOps.js');

let options = {
  cronTime : '* * * * *',
  onTick : function(){
    updateBlockchain();
  },
  start : false
};



const job = new cron.CronJob(options);
job.start();
console.log("Blockchain updation job running.");



let updateBlockchain = function(){
  console.log("Checking any Possible Blockchain Updation");
  if(blockPool.length >= 1){
    blockchainOps.addBlock(blockPool[blockPool.length-1],()=>{
    blockPool.pop();
    Updations.updateBlockPool(blockPool);
    Updations.updateBlockchain(blockchain);
    console.log("Cron Job | Blockchain updated | Blocks in Pool : ", blockPool.length);
  });
    return;
}
  return;
}
