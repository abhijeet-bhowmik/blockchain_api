const fs = require('fs');

module.exports.updatePool = function(pool){

  fs.writeFileSync('data/pool.json', JSON.stringify(pool) , ()=>{});
  return;
}



module.exports.updateBlockchain = function(blockchain){

  fs.writeFileSync('data/blockchain.json', JSON.stringify(blockchain) , ()=>{});
  return;
}


module.exports.updateBlockPool = function(blockPool){
  fs.writeFileSync('data/blockPool.json', JSON.stringify(blockPool), ()=>{});
  return;
}


