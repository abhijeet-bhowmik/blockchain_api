let service = require('../service/blockchain.js');






module.exports.view = function(req,res){
  service.view()
  .then(function(blockchain){
    res.status(200).json({ blockchain : blockchain, success : true});
  })
  .catch(function(err){
    res.status(500).json({ success : false, err : err});
  });
}

module.exports.checkValidity = function(req, res){
  service.checkValidity()
  .then(function(response){
    res.status(200).json(response);
  })
  .catch(function(err){
    res.status(500).json({ success : false, err: err.message });
  });
}

module.exports.getBalance = function(req, res){
  service.getBalance(req.params.userid)
  .then(function(balance){
    res.status(200).json({ userid : req.params.userid, balance : balance});
  })
  .catch(function(err){
    res.status(500).json({ success : false, err: err.message});
  });
}


module.exports.deleteBlock = function(req,res){
  service.deleteBlock(req.params.index)
  .then(function(resp){
    res.status(200).json({ block : resp, success : true});
  })
  .catch(function(err){
    res.status(500).json({ success : false, err : err.message});
  });
}