const express = require('express');
const path = require('path');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const {mergePdfs} = require('./merge');
const app = express();
app.use('/static', express.static('public'))

PORT = 3001;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"templates/index.html"));
})

app.post('/merge',upload.array('pdfs',2),async (req,res,next)=>{
    console.log(req.files);
    let d = await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
    res.redirect(`http://localhost:${PORT}/static/${d}.pdf` );
})

app.listen(PORT,()=>{
    console.log(`Sever listening on http://localhost:${PORT}`);
});