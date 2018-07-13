const Operations = require('../operations/blockchainOps.js');
const blockchain = require('../utils/variables.js').blockchain;




module.exports.view = function(){
  return new Promise(function(resolve, reject){
    resolve(blockchain.chain);
  });
}

module.exports.checkValidity = function(){
  return new Promise(function(resolve, reject){
    resolve({ validity : Operations.isChainValid(), hash : blockchain.chain[blockchain.chain.length-1].hash});
  });
}


module.exports.getBalance = function(userid){
  return new Promise(function(resolve, reject){
    resolve(Operations.getBalance(userid));
  });
}

module.exports.deleteBlock = function(index){
    return new Promise(function(resolve, reject){
      let block = blockchain.chain.splice(index,1);
      resolve(block);
    });
}
