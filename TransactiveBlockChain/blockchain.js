const Block = require('./block');
const fs = require('fs');
const Json = require('json-serialize');
//const time = require('./timeStamp');

class BlockChain {
  constructor(){
    // if(fs.existsSync('chain.json')){
    //   this.chain = Json.deserialize(fs.readFileSync('chain.json').toString('utf8'));
    //   this.difficulty = 3;
    //   console.log(this.chain)
    // }

    this.chain = [new Block([], {data : "Genesis Block"}, 0)];
    this.difficulty = 3;

  }

}


module.exports = BlockChain;