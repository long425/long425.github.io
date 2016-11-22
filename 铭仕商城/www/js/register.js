

$("#register-form").submit(function(e){
	e.preventDefault();
	if($("#username").val()){
		if(!$("#username").val().match(/^\w{1,6}$/)){
			alert("账号格式不合符要求");
			return;
		}
	}else{
		alert("用户名不能为空")
	}
	
	if($("#psw").val()){
		if($("#psw").val().match(/^[0-9A-Za-z]{6,20}$/)){
			if($("#config").val() != $("#psw").val()){
				alert("两次输入的密码不一样")
				return;
			}
		}else{
				alert("密码格式错误，密码为6~20位")
		}
	}		
		
		if($("#useremail").val()){
			if(!$("#useremail").val().match( /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
				alert("邮箱格式错误");
			}
		}else{
			alert("邮箱不能为空")
		}
		
		if(!$("#quesion").val()){
			alert("请填写密保保护问题")
		}
		
		if(!$("#answer").val()){
			alert("请填写密码保护答案")
		}
		
		if($("#regquestion").val() != "铭仕商城"){
			alert("请正确填写防恶意注册问题")
		}
		
		if(!$("#verifycode").val()){
			alert("请填写验证码")
		}
		
		var data = $("#register-form").serialize();
		
		$.post("/regist-api",data,function(resData){
			alert(resData.msg);
			if(resData.err == 0){
				location.href = "login.html";
			}
		});
	
})









