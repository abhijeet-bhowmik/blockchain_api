let Operation = require('../operations/blockchainOps.js');



module.exports.transactionValidation =function(req,res,next){
console.log("validating");
req.checkBody('from', 'sender is required').notEmpty();
req.checkBody('to', 'receiver is required').notEmpty();
req.checkBody('amount', 'This is required').notEmpty();
//req.checkBody('amount', 'This should be a number').isInt();
var errors =req.validationErrors();
if (errors){
res.json(errors);
}
else next();
}




module.exports.verifyBalance = function(req, res, next){
  if(Operation.getBalance(req.body.from) <= parseInt(req.body.amount))
  {
    res.json({err : "Not enough balance in sender's account", success : "false"});
  }
  else {
    {
      next()
    }
  }
}