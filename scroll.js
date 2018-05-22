window.onscroll = function() {
	scrollFunction();
}
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("scrollButton").style.display = "block";
	} else {
		document.getElementById("scrollButton").style.display = "none";
	}
}

$(document).ready(function() {
	$("#scrollButton").click(function() {
		event.preventDefault();
		$("html, body").animate({
			scrollTop : 0
		}, "slow");
	});
});

var newString;
var newSize;
function bigImage(x) {
	var myString = x.style.height;
	newString = myString.substring(0, myString.indexOf('px'));
	newSize = (newString * 125) / 100;
	x.style.height = newSize + "px";
	x.style.width = newSize + "px";
}
function smallImage(x) {
	x.style.height = "320px";
	x.style.width = "320px";
}

$(document).ready(function() {
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop : $(hash).offset().top
			}, 800, function() {
				window.location.hash = hash;
			});
		}
	});
});
var textInput;

function setTexth3(){
	textInput = document.getElementById('textInput').value;
	alert(textInput);
	document.getElementById('arsenal').innerHTML = textInput;		
}