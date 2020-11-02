function check_uname(){
	var _uname=uname.value;
	// 正则判断用户名格式是否正确
	var reg=/^[a-zA-Z0-9\u4E00-\u9FA5]{4,11}$/;
	if(!_uname){uname_false.innerHTML="用户名不能为空";}else if(!reg.test(_uname)){
		uname_false.innerHTML="用户名格式不正确";
		
	}
	
}
function check_upwd(){
	var _upwd=upwd.value;
	if(!_upwd){upwd_false.innerHTML="密码不能为空";}
}

function login() {
				var _uname=uname.value;
				var _upwd=upwd.value;
				// console.log(_uname);
				// console.log(_upwd);
				if(!_uname){uname_false.innerHTML="用户名不能为空";return;}
				if(!_upwd){upwd_false.innerHTML="密码不能为空";return;}
				//创建异步对象
				var xhr = new XMLHttpRequest();
				//监听响应
				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4 && xhr.status == 200) {
						var s = xhr.responseText;
						var arr = JSON.parse(s);
						if (arr.code == 200) {
							uname_upwd_false.innerHTML = "登录成功"
						}
						if (arr.code == 301) {
							uname_upwd_false.innerHTML = "用户名或密码不正确"
						}
					}
				};
				//创建请求,打开连接
				xhr.open('get', '/user/html/login/' + _uname + '&' + _upwd, true);
				//发送请求
				xhr.send();
			}

