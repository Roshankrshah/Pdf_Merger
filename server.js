const express = require('express');
const path = require('path');
const app = express();

PORT = 3001;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"templates/index.html"));
})

app.listen(PORT,()=>{
    console.log(`Sever listening on http://localhost:${PORT}`);
});