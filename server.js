const express = require('express');
const path = require('path');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const app = express();

PORT = 3001;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"templates/index.html"));
})

app.post('/merge',upload.array('pdfs',2),function(req,res,next){
    console.log(req.files);
    res.send({data: req.files});

})
app.listen(PORT,()=>{
    console.log(`Sever listening on http://localhost:${PORT}`);
});