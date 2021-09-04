const express = require('express');
const app = express();
const PORT = 3000;

// app.set('view engine','html');
// app.engine('html',require('ejs').renderFile);


// app.set('views1',__dirname + '/home');
app.use(express.static(__dirname + '/views'));


//route
//just page test
app.get('/',(req,res)=>{
    //res.send('루트입니다.' + __dirname);
    res.sendFile(__dirname + '/home/index.html');
});
app.get('/sub',(req,res)=>{ res.sendFile(__dirname + '/home/index2.html');});


//tensor - ex
app.get('/5',(req,res)=>{ res.sendFile(__dirname + '/home/5.html'); });
app.get('/5.3',(req,res)=>{ res.sendFile(__dirname + '/home/5.3.html'); });



app.listen(PORT,()=>{
    console.log(`Running [ ${PORT} ] PORT`);
} );