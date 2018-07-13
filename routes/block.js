let controller = require('../controller/block');
let router = require('express')();



router.get('/view', controller.view);




module.exports = router;
