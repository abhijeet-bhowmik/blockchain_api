var Json = require('json-serialize');
let fs = require('fs');
const Blockchain = require('../TransactiveBlockChain/blockchain.js');
const Miner = require('../TransactiveBlockChain/miner.js');
const Block = require('../TransactiveBlockChain/block.js');







const miner = new Miner('generic');

if (fs.existsSync('data/blockchain.json')){
  module.exports.blockchain = Json.deserialize(fs.readFileSync('data/blockchain.json').toString('utf8'));
}
else
{
  module.exports.blockchain = new Blockchain();
}


if (fs.existsSync('data/pool.json')){
  module.exports.transPool = Json.deserialize(fs.readFileSync('data/pool.json').toString('utf8'));
}
else
{
  module.exports.transPool = [];
}

if (fs.existsSync('data/blockPool.json')){
  module.exports.blockPool = Json.deserialize(fs.readFileSync('data/blockPool.json').toString('utf8'));
}
else
{
  module.exports.blockPool = [];
}




module.exports.block = Block;
//module.exports.blockchain = blockchain;
module.exports.miner = miner;
