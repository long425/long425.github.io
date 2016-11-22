
//登录请求
$("#login-form").submit(function(e){
	e.preventDefault();
	
	if(!$("#username1").val().match(/^\w{1,6}$/)){
		alert("账号格式不合符要求");
		return;
	}
	var data = $("#login-form").serialize();		
	$.post("/login-api",data,function(resData){
		if(resData.err == 0){
			location.href = "/";
		}else{
			alert(resData.msg);
		}
	});
})








































