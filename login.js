function check_uname(){
	var _uname=uname.value;
	// 正则判断用户名格式是否正确
	var reg=/^[a-zA-Z0-9\u4E00-\u9FA5]{4,11}$/;
	if(!_uname){uname_false.innerHTML="请输入用户名";}else if(!reg.test(_uname)){
		uname_false.innerHTML="用户名格式不正确";
		
	}
	
}
function check_upwd(){
	var _upwd=upwd.value;
	if(!_upwd){upwd_false.innerHTML="请输入密码";}
}

//扫码登录
//1查找触发事件的元素login_smdl
var sm=document.getElementById("login_smdl");
//2绑定事件处理函数
sm.onclick=function(){
//3查找要修改的元素
let sm_fri=this.parentElement.nextElementSibling;
let sm_sec=sm_fri.nextElementSibling;
//4修改元素
	sm_fri.className="hid";
	sm_sec.className="login_ewm";
	sm.style.color="#f10180";
	zh.style.color="#666666";
	
};

//账号密码登录
//1查找触发事件的元素
var zh=document.getElementById("login_zhdl");
//2绑定事件处理函数
zh.onclick=function(){
//3查找要修改的元素
var zh_fri=this.parentElement.nextElementSibling;
var zh_sec=zh_fri.nextElementSibling;
//4修改元素
	zh_fri.className="login_zh";
	zh_sec.className="hid";
	sm.style.color="#666666";
	zh.style.color="#f10180";
	
}


function login() {
				var _uname=uname.value;
				var _upwd=upwd.value;
				// console.log(_uname);
				// console.log(_upwd);
				if(!_uname){uname_false.innerHTML="请输入用户名";return;}
				if(!_upwd){upwd_false.innerHTML="请输入密码";return;}
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
			

