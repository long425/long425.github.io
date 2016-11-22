var imgs = document.querySelectorAll("#lbt>img");

var points = document.querySelectorAll(".point");

points[0].style.backgroundColor = "#74A8ED";
points[0].style.color = "#FFFFFF";
points[0].style.transform = "scale(1.5)";

for(var i = 0; i < imgs.length; i++) {
	imgs[i].style.top = i * 368 + "px";
}

var currentIndex = 0;

//由于定时器触发的自动切换图片和手动点击小白点时切换图片
//执行的代码是相同的，所以把这段代码写在函数中，两个地方都
//可以调用
function moveImage(isAnimate) {
	for(var i = 0; i < imgs.length; i++) {
		if(currentIndex == 0 && !isAnimate) {
			imgs[i].style.transition = "none";
		} else {
			imgs[i].style.transition = "top 0.5s ease-in-out";
		}

		imgs[i].style.top = (i - currentIndex) * 368 + "px";
	}
}

function changeImage() {
	lose()
	currentIndex++;

	if(currentIndex > 5) {
		currentIndex = 0;
	}
	obtain();
	moveImage(false);
	if(currentIndex == 0) {
		timer = setTimeout(changeImage, 1400);
	} else if(currentIndex == 5) {
		timer = setTimeout(changeImage, 600);
	} else {
		timer = setTimeout(changeImage, 2000);
	}

}

var timer = setTimeout(changeImage, 2000);

//给每个小白点添加点击事件监听
for(var i = 0; i < points.length; i++) {
	points[i].dataset.index = i;
	points[i].onmousemove = function() {
		lose();
		this.style.backgroundColor = "#74A8ED";
		this.style.color = "#FFFFFF";
		this.style.transform = "scale(1.5)";
		
		//把当前需要显示的图片索引设置为点击的索引
		currentIndex = this.dataset.index;

		moveImage(true);

		//为了手动点击的切换和自动切换不相互影响，点击时
		//把自动切换停止，再从新开启。
		clearTimeout(timer);
		timer = setTimeout(changeImage, 2000);
	}
}


//失去焦点
function lose(){
	points[currentIndex % 5].style.backgroundColor = "#FFFFFF";
	points[currentIndex % 5].style.color = "#74A8ED"
	points[currentIndex % 5].style.transform = "scale(1)"

}

//获得焦点
function obtain(){
	points[currentIndex % 5].style.backgroundColor = "#74A8ED";
	points[currentIndex % 5].style.color = "#FFFFFF"
	points[currentIndex % 5].style.transform = "scale(1.5)"
}




//-----------------------------------------------------------















































