const digest = require('sha256');
//const time = require('./timeStamp');

class Block {
  constructor(transactions, previousHash = ""){
    this.timeStamp = new Date().getTime();
    this.miner = '';
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;}



  calculateHash() {
    return digest(this.timeStamp + JSON.stringify(this.transactions) + this.previousHash + this.nonce).toString();
  }



}

module.exports = Block;