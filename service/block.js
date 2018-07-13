let blockPool  = require('../utils/variables.js').blockPool;




module.exports.view = function(){
  return new Promise(function(resolve, reject){
    resolve(blockPool);
  });
}
