const express=require('express');
const path = require('path')

let app=express();
/*app.listen(3000,()=>console.log('servidor corriendo en el puerto 3000'))*/
app.listen(process.env.PORT || 3000,function(){
    console.log('Servidor corriendo en el puerto 3000')
})


app.get('/r',(req,res)=>{
    res.send('Servidor corriendo con exito')
})

app.get('/',(req,res)=>{
    res.sendFile((__dirname + '/views/home.html'))
})

app.use(express.static(path.join(__dirname, './public')));  