const express=require('express');
const productRouter=require('./router/product.js')
const bodyParser=require('body-parser');
const app=express();
app.listen(8080);

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
	extended:false
}))
app.use('/product',productRouter);