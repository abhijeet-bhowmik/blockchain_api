
const TransPool = require('./transPool');

const transPool = new TransPool(6);

class Transaction
{
  constructor(fromAddress, toAddress, amount, id){
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
    this.id = id;
    this.timestamp = new Date().getTime();
  }

  addToPool(){
    trasnPool.addTransaction(this, (err)=>{
      if(err) console.log(err);
      else console.log("Successfully added.");
    });
  }

}


module.exports = Transaction;