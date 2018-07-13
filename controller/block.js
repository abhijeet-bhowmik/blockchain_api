let service = require('../service/block.js');








module.exports.view = function(req, res){
  service.view()
  .then(function(blocks){
    res.status(200).json({ pending_blocks : blocks , success : true});
  })
  .catch(function(err){
    res.status(500).json({ err : err, success : false});
  });
}