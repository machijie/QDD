const express=require('express');
const lianxiRouter=require('./router/qdd_lianxi.js');
const bodyParser=require('body-parser');
const app=express();
app.listen('8080');
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use(express.static('./public'));
app.use('/lianxi',lianxiRouter);

