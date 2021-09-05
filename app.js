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
app.get('/8.save',(req,res)=>{ res.sendFile(__dirname + '/home/8.save.html'); });
app.get('/8.load',(req,res)=>{ res.sendFile(__dirname + '/home/8.load.html'); });
app.get('/10.3',(req,res)=>{ res.sendFile(__dirname + '/home/10.3.html'); });
app.get('/10.4',(req,res)=>{ res.sendFile(__dirname + '/home/10.4.html'); });
app.get('/11',(req,res)=>{ res.sendFile(__dirname + '/home/11.html'); });
app.get('/12.2',(req,res)=>{ res.sendFile(__dirname + '/home/12.2.html'); });



app.listen(PORT,()=>{
    console.log(`Running [ ${PORT} ] PORT`);
} );