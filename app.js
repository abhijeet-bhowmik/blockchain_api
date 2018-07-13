const express = require('express');
const app = express();
const Blockchain = require('./TransactiveBlockChain/blockchain.js');
const TransactionRouter = require('./routes/transaction.js');
const BlockchainRouter = require('./routes/blockchain.js');
const BlockRouter = require('./routes/block.js');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fs = require('fs');
const json = require('json-serialize');
require('./cron/blockCreation.js');
require('./cron/blockchainUpdater.js');
require('./utils/variables.js')
var metrics = require('node-monitor-ui');
metrics.init(3001);
const validator =require('express-validator');



app.use(bodyParser.json());
app.use(validator());
app.use(morgan('tiny'));


app.use('/transaction', TransactionRouter);
app.use('/blockchain', BlockchainRouter);
app.use('/block', BlockRouter);
app.use('/delete', BlockchainRouter);



app.listen(3000, ()=>{
  console.log("Listening");
});
