const express = require('express');
const app = express();
app.get('/api',(erq,res)=>res.send({id : 1 , mom : 'fatema'}));
app.listen(8000);