let service = require('../service/transaction.js');





module.exports.view = function(req,res){
  service.view()
  .then((transactions)=>{
    res.json({'success' : 'true', 'transaction' : transactions});
  })
  .catch((err)=>{
    res.status(500).json({'success' : 'false', 'error' : err});
  });
}



module.exports.broadcast = function(req, res){
  service.broadcast(req.body)
  .then((transaction)=>{
    res.status(200).json({'success' : 'true', 'transaction' : transaction});
  })
  .catch((err)=>{
    res.status(500).json({'success' : 'false', 'error' : err});
  });
}


module.exports.remove = function(req, res){
  console.log(req.params.tid);
  service.delete(req.params.tid)
  .then((transaction_id)=>{
    res.json({'success' : 'true', 'reply' : `successfully deleted transaction ${transaction_id}`});
  })
  .catch((err)=>{
    res.status(500).json({'success' : 'false', 'error' : err.message});
  });
}







