const BlockChain = require('./blockchain.js');
const Block = require('./block.js');
const TransPool = require('./transPool.js');
const Transaction = require('./transaction.js');
const Miner  = require('./miner.js');






const blockChain = new BlockChain();
const miner = new Miner('123321');
const transaction_1 = new Transaction('123456', '654321', 1000);
const transaction_2 = new Transaction('67890', '09876', 2000);
const transaction_3 = new Transaction('654321', '123456', 500);
var transaction_list = [transaction_1, transaction_2, transaction_3];
const block = new Block(transaction_list);


blockChain.addBlock(block, miner, ()=>{});
//console.log(blockChain.chain[1].getJsonTrans());
//blockChain.chain[1].transactions[0].amount = 20000
//console.log(blockChain.chain[1]);
//console.log(blockChain.chain[1].getJsonTrans());




const miner_1= new Miner('12332345');
const transaction_4 = new Transaction('123456', '654321', 10000);
const transaction_5 = new Transaction('67890', '09876', 200);
const transaction_6 = new Transaction('654321', '123456', 50000);
transaction_list = [transaction_4, transaction_5, transaction_6];
const block_2 = new Block(transaction_list);


blockChain.addBlock(block_2, miner_1, ()=>{});

console.log(blockChain.chain);
console.log(blockChain.isChainValid());







