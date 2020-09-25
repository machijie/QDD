const express=require('express');
const r=express.Router();
const pool=require('../pool.js');

//添加产品
r.post('/insert',(req,res)=>{
	let obj=req.body;
	pool.query("INSERT INTO lenovo SET ?",[obj],(err,result)=>{
		if(err) throw err;
		//console.log(result)
		if(result.affectedRows==0){
			res.send("0")
		}else{
			res.send("1")
		}
	})
})

//查询商品
r.get('/select',(req,res)=>{
	pool.query("SELECT * FROM lenovo",(err,result)=>{
		if(err) throw err;
		//console.log(result)
		if(result.length==0){
			res.send("0")
		}else{
			res.send(result)
		}
	})
})

//删除商品
r.delete("/del/:pid",(req,res)=>{
	let _pid=req.params.pid;
	pool.query("DELETE FROM lenovo WHERE pid=?",[_pid],(err,result)=>{
		if(err) throw err;
		//console.log(result)
		if(result.affectedRows==0){
			res.send("0")
		}else{
			res.send("1")
		}
	})
})

//修改商品
r.put("/update",(req,res)=>{
	let obj=req.body;
	pool.query("UPDATE lenovo SET ? WHERE pid=?",[obj,obj.pid],(err,result)=>{
		if(err) throw err;
		console.log(result)
		if(result.affectedRows==0){
			res.send("0")
		}else{
			res.send("1")
		}
	})
})

module.exports=r;