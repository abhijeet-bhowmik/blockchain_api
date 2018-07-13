const Block = require('./Block');
const Transaction = require('./Transaction');
const BlockChain = require('./BlockChain');
let Operations = require('../operations/blockOps.js');


class Miner{
  constructor(address){
    this.address = address;
    }

    mine(block, difficulty, done)
    {
      Operations.mineBlock(block, difficulty, this.address, (block)=>{
        done(block);
        })

    }
}

module.exports = Miner;
