console.log('wael');
//const fs = require('fs');
//fs.writeFileSync('newFile.txt','hello wael');
const express = require('express');
const app = express();
app.get('/',(erq,res)=>res.send('wael'));
app.listen(8000);



