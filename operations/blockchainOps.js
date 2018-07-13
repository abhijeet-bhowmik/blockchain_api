let blockchain = require('../utils/variables.js').blockchain;
let miner = require('../utils/variables.js').miner;
let digest = require('sha256');


module.exports.isChainValid = function(){

  for (let i = 1 ; i <= blockchain.chain.length - 1 ; i++){
    let currBlock = blockchain.chain[i];
    let prevBlock = blockchain.chain[i-1];

    if(currBlock.hash != calculateHash(currBlock)){
      return false;
    }
    if(currBlock.previousHash != prevBlock.hash){
      return false
    }
  }
  return true;

}

module.exports.addBlock = function(block, done){

          block.previousHash = blockchain.chain[blockchain.chain.length-1].hash;
          miner.mine(block, blockchain.difficulty, (result_block)=>{
          blockchain.chain.push(result_block);
          done();
          })
        }

module.exports.getBalance = function(address){
  let balance = 0
  for (const block of blockchain.chain){
    for(const trans of block.transactions){
      if(trans.fromAddress == address){
        balance -= parseInt(trans.amount, 10);

      }

      if(trans.toAddress == address){
        balance += parseInt(trans.amount, 10);

      }
    }
  }
  return balance;
}



const calculateHash = function(block){
  return digest(block.timeStamp + JSON.stringify(block.transactions) + block.previousHash + block.nonce).toString();

}
