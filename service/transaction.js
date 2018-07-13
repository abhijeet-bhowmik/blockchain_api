const transaction_pool = require('../utils/variables.js').transPool;
const Transaction = require('../TransactiveBlockChain/transaction.js');
const Operations = require('../operations/updation.js');
var UIDGenerator = require('uid-generator');
var uidgen = new UIDGenerator();




module.exports.view = function(){
  return new Promise(function(resolve, reject){
    if (transaction_pool.length === 0) resolve([]);
    else resolve(transaction_pool);
  });
}


module.exports.broadcast = function(trans_info){
    return new Promise(function(resolve, reject){
      uidgen.generate()
      .then((tid)=>{
        transaction = new Transaction(trans_info.from, trans_info.to, trans_info.amount, tid)
        transaction_pool.push(transaction);
        Operations.updatePool(transaction_pool);
        resolve(transaction);
      });
    });
}

module.exports.delete = function(tid){
  return new Promise(function(resolve, reject){
    for(var i = 0; i<transaction_pool.length; i++){
      if (transaction_pool[i].id === tid){
        id = transaction_pool.splice(i,1);
        Operations.updatePool(transaction_pool);
        resolve(id);
      }
    }
    reject(new Error("Transaction not found."));
  });
}
