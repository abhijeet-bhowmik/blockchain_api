let controller = require('../controller/transaction.js');
let router = require('express')();
var validation = require('./validation.js');



router.get('/view', controller.view);
router.put('/broadcast', validation.transactionValidation,  controller.broadcast);
//router.post('/defreeze', controller.defreezeTrans);
router.delete('/remove/:tid',  controller.remove);

module.exports = router;