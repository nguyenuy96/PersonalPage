window.onscroll = function(){
	scrollFunction();
}
function scrollFunction(){
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
		document.getElementById("scrollButton").style.display = "block";
	}else{
		document.getElementById("scrollButton").style.display = "none";
	}
}
//function backtoTop(){
//	document.body.scrollTop = 0;
//	document.documentElement.scrollTop = 0;
//}
$(document).ready(function(){
	$("#scrollButton").click(function(){
		event.preventDefault();
		$("html, body").animate({scrollTop: 0}, "slow");
		return false;
	});
});

