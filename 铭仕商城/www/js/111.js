var app = angular.module("myApp", []);

app.controller("menuleft", ["$scope", function($scope) {
	$scope.Xinxi = function() {
		$("#left").removeClass("icon-sort-down");
		$("#left").addClass("icon-sort-up")

		$("#menu-left-btn").css("background-color", "#FFFFFF")
			.css("border-bottom", "none")
		$("#resume").css("display", "block")
	}
	$scope.xinxi = function() {
		$("#left").removeClass("icon-sort-up");
		$("#left").addClass("icon-sort-down");

		$("#menu-left-btn").css("background-color", "#FCFCFC")
		$("#resume").css("display", "none")
	}
}])

app.controller("menuright", ["$scope", function($scope) {
	$scope.Xinxi = function() {
		$("#right").removeClass("icon-sort-down");
		$("#right").addClass("icon-sort-up")

		$("#menu-right-btn").css("background-color", "#FFFFFF")
			.css("border-bottom", "none")
		$("#cart").css("display", "block")
	}
	$scope.xinxi = function() {
		$("#right").removeClass("icon-sort-up");
		$("#right").addClass("icon-sort-down")

		$("#menu-right-btn").css("background-color", "#FCFCFC")
		$("#cart").css("display", "none")
	}
}])

app.controller("ctrl1", ["$scope", function($scope) {
	$scope.closeBtnClick = function() {
		$(".close").css("display", "none");
		$(".item-list").css("display", "none");
	}
}])



app.controller("ctrl3", ["$scope", function($scope) {
	$scope.backtopClick = function(){
		$('html, body').animate(
			{scrollTop: 0}, 800); 	
	}
}])

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







































app.controller("landing",["$scope","login1",function($scope,login1){
	$scope.commit = function(){
		login1();
	}
}])