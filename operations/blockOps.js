let digest = require('sha256');

module.exports.mineBlock = function(block, difficulty, miner_add, done){
  block.miner = miner_add;
  while(block.hash.substring(0,difficulty) !== Array(difficulty+ 1).join("0")){
    block.nonce++;
    block.hash = calculateHash(block);
  }

  done(block);
}




var calculateHash = function(block){
  return digest(block.timeStamp + JSON.stringify(block.transactions) + block.previousHash + block.nonce).toString();
}