const express=require('express');
const routes=require('./routes/routes');
const app=express();

app.set('port',3000);
app.set('view engine','ejs');

app.use(routes);

app.listen(app.get('port'),()=>{
    console.log(`Corriendo en el puerto: ${app.get('port')}`);
});