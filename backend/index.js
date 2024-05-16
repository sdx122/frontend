const express = require('express');
const imageDownloader = require('image-downloader');

const app = express();
const port = 3001   ;


console.log({__dirname});

app.post('/upload-by-link',async(req,res) =>{
    const {link} = req.body;
    console.log("hellllllooooo",req.body);
    await imageDownloader.image({
        url : link,
        dest: __dirname + '/uploads',
    })
    res.json(__dirname + '/uploads');
})





app.listen(port,() => {
    console.log("listening on the port");
}) 

