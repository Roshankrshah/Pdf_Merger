const express = require('express');
const app = express();

PORT = 3001;

app.get('/',(req,res)=>{
    res.send("Hi i m staring new project PDF Merger");
})

app.listen(PORT,()=>{
    console.log(`Sever listening on http://localhost:${PORT}`);
});