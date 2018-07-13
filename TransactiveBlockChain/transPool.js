class TPool{
  constructor(capacity){
    this.transactions = new Array(capacity);
    this.capacity = capacity;
    this.size = 0;
  }

  addTransaction(transaction, done){
    if (this.size === this.capacity){
        done(new Error("Pool Congested. Try Later"));
    }

    this.transactions.push(transaction);
    this.size++;
    done(null);}


  extractTransactions(offset, done){
    if (this.size === 0){
      console.log("Transaction Pool empty.");
      return;
    }
    transaction_array = []
    for(let i = 0 ; i < offset ; i++){
      transaction = this.transactions.shift();
      transaction_array.push(transaction);
    }

    done(transaction_array);
}

}


module.exports = TPool;