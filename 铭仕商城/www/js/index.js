var app = angular.module("myApp", ["ngRoute"]);

app.controller("menuleft", ["$scope", "leftup","leftbot",function($scope,leftup,leftbot) {
	$scope.Xinxi = function() {
		leftup();
	}
	$scope.xinxi = function() {
		leftbot();
	}
}]);

app.controller("menuright", ["$scope","rightup", "rightbot",function($scope,rightup,rightbot) {
	$scope.Xinxi = function() {
		rightup();
	}
	$scope.xinxi = function() {
		rightbot();
	}
}]);

app.controller("ctrl1", ["$scope","close", function($scope,close) {
	$scope.closeBtnClick = function() {
		close();
	}
}]);

app.controller("ctrl3", ["$scope","backtop", function($scope,backtop) {
	$scope.backtopClick = function(){
		backtop();
	}
}]);

app.controller("allGoods",["$scope","allgoods",function($scope,allgoods){
	allgoods();
}]);

app.controller("hotGoods",["$scope","hotgoods",function($scope,hotgoods){
	hotgoods();
}]);



//左边按钮小箭头朝上，下拉菜单显示
app.factory("leftup",function(){
	return function(){
		$("#left").removeClass("icon-sort-down");
		$("#left").addClass("icon-sort-up")

		$("#menu-left-btn").css("background-color", "#FFFFFF")
			.css("border-bottom", "none")
		$("#resume").css("display", "block")
	}
});

//左边按钮小箭头朝下，下拉菜单隐藏
app.factory("leftbot",function(){
	return function(){
		$("#left").removeClass("icon-sort-up");
		$("#left").addClass("icon-sort-down");

		$("#menu-left-btn").css("background-color", "#FCFCFC")
			.css("border","solid 1px #DFDFDF")
		$("#resume").css("display", "none")
	}
})

//右边按钮的小箭头朝上，下拉菜单显示
app.factory("rightup",function(){
	return function(){
		$("#right").removeClass("icon-sort-down");
		$("#right").addClass("icon-sort-up")
		$("#menu-right-btn").css("background-color", "#FFFFFF")
			.css("border-bottom", "none")
		$("#cart").css("display", "block")
	}
})

//右边按钮的小箭头朝下，下拉菜单隐藏
app.factory("rightbot",function(){
	return function(){
		$("#right").removeClass("icon-sort-up");
		$("#right").addClass("icon-sort-down")
	
		$("#menu-right-btn").css("background-color", "#FCFCFC")
			.css("border","solid 1px #DFDFDF")
		$("#cart").css("display", "none")
	}
})

//关闭右拉菜单
app.factory("close",function(){
	return function(){
		$(".close").css("display", "none");
		$(".item-list").css("display", "none");
	}
})

//返回顶部
app.factory("backtop",function(){
	return function(){
		$("html,body").animate(
			{scrollTop:0},800);
	}	
})

//全部商品右拉菜单
app.factory("allgoods",function(){
	return function(){
		var list = $(".item-h3");
		for(var i = 0; i < list.length; i++) {
			list.eq(i).mouseenter(function() {
				$(this).children().eq(2).css("display", "block");
				$(this).children().eq(3).css("display", "block");
			})
			list.eq(i).mouseleave(function() {
				$(this).children().eq(2).css("display", "none");
				$(this).children().eq(3).css("display", "none");
			})
		}
	}
})

//热门商品分类
app.factory("hotgoods",function(){
	return function(){
		var tabs = $(".tabs-box-left");
		for(var i=0;i<tabs.length;i++){
			tabs.eq(i).mouseenter(function(){
				$(this).children().eq(0).addClass("hover-right")
			})
		
			tabs.eq(i).mouseleave(function(){
				$(this).children().eq(0).removeClass("hover-right")
			})
			
			
			tabs.eq(i).on("click",function(){
				tabs.children().removeClass("dianji");
				tabs.children().removeClass("tabshow")
				
				$(this).children().eq(0).addClass("dianji");
				$(this).children().eq(1).addClass("tabshow");
			})
		}
	}
})



app.directive("isLogin",function(){
	return{
		restrict:"C",
		replace:false,
		link:function($scope){
			if ($.cookie().token) {
				console.log($.cookie())
				$("#login-left").hide();
				$("#login-left1").show();
				$("#login-right").hide();
				$("#login-right1").show();
				$scope.account = $.cookie().account;
			} else{
				$("#login-left").show();
				$("#login-left1").hide();
				$("#login-right").show();
				$("#login-right1").hide();
			}
		}
	}
})

app.directive("resumeLogin",function(){
	return {
		restrict:"C",
		replace:false,
		link:function ($scope) {
			 if ($.cookie().token) {
				console.log($.cookie())
				$("#denglu").hide();
				$("#denglu1").show();				
				$scope.account = $.cookie().account;
			} else{
				$("#denglu").show();
				$("#denglu1").hide();
			}
		}
	}
});

app.directive("dropOut",function(){
	return {
		restrict:"C",
		replace:false,
		link:function ($scope) {
			 $scope.logdown = function(){
			 	$.removeCookie("token")
			 	$.removeCookie("account");
			 	$("#login-left").show();
				$("#login-left1").hide();
				$("#login-right").show();
				$("#login-right1").hide();
				$("#denglu").show();
				$("#denglu1").hide();
			 }
		}
	}
})



$("#login-left").submit(function(e){
	e.preventDefault();
		if(!$("#username").val().match(/^\w{1,6}$/)){
			alert("账号格式不合符要求");
			return;
		}
	var data = $("#login-left").serialize();		
	$.post("/login-api",data,function(resData){
	
		if(resData.err == 0){
			location.href = "/";
		}else{
			alert(resData.msg);
		}
	});
})









































