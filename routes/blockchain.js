let controller = require('../controller/blockchain');
let router = require('express')();



router.get('/view', controller.view);
router.get('/validity', controller.checkValidity);
router.get('/balance/:userid', controller.getBalance);
router.delete('/delete/:index', controller.deleteBlock);



module.exports = router;