const express = require('express');
const pool = require('../pool.js');
const r = express.Router();
r.get('/phone', (req, res) => {
	let obj = req.query;
	console.log(obj);
	if (!obj.phone) {
		res.send({
			code: 1,
			msg: 'phone required'
		});
		return;
	}
	pool.query('SELECT * FROM qdd_lianxi WHERE phone=?', [obj.phone], (err, result) => {
		if (err) throw err;
		console.log(result);
		if (result.length === 0) {
			res.send({
				code: 2,
				msg: 'phone error'
			});
		} else {
			res.send({
				code: 200,
				msg: 'phone true'
			})
		}
	})
})

r.post('/add', (req, res) => {
	let obj = req.body;
	console.log(obj);
	if (!obj.name) {
		res.send({
			code: 1,
			msg: 'name required'
		});
		return;
	}
	if (!obj.email) {
		res.send({
			code: 2,
			msg: 'email required'
		});
		return;
	}
	if (!obj.phone) {
		res.send({
			code: 3,
			msg: 'phone required'
		});
		return;
	}
	if (!obj.adress) {
		res.send({
			code: 4,
			msg: 'adress required'
		});
		return;
	}
	pool.query('INSERT INTO qdd_lianxi SET ?', [obj], (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send({
			code: 200,
			msg: 'reg success'
		});
	})
})
r.get('/delete', (req, res) => {
	let obj = req.query;
	console.log(obj);
	if (!obj.lid) {
		res.send({
			code: 1,
			msg: 'lid required'
		})
		return;
	}
	pool.query('DELETE FROM qdd_lianxi WHERE lid=?', [obj.lid], (err, result) => {
		if (err) throw err;
		console.log(result);
		if (result.affectedRows === 0) {
			res.send({
				code: 2,
				msg: 'delete err'
			})
		} else {
			res.send({
				code: 200,
				msg: 'delete success'
			})
		}
	})
})
r.get('/update', (req, res) => {
	let obj = req.query;
	console.log(obj);
	if (!obj.lid) {
		res.send({
			code: 1,
			msg: 'lid required'
		})
	}
	if (!obj.name) {
		res.send({
			code: 2,
			msg: 'name required'
		})
	}
	if (!obj.email) {
		res.send({
			code: 3,
			msg: 'email required'
		})
	}
	if (!obj.phone) {
		res.send({
			code: 4,
			msg: 'phone required'
		})
	}
	if (!obj.adress) {
		res.send({
			code: 5,
			msg: 'adress required'
		})
	}
	pool.query('UPDATE qdd_lianxi SET ? WHERE lid=?', [obj, obj.lid], (err, result) => {
		if (err) throw err;
		console.log(err);
		if (result.affectedRows === 0) {
			res.send({
				code: 6,
				msg: 'update err'
			})
		} else {
			res.send({
				code: 200,
				msg: 'update success'
			})
		}
	})
})
module.exports = r;
