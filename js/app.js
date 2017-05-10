var minScroll = 30;

window.onscroll = function(){
	var header = document.getElementsByTagName('header')[0];
	var nav = document.getElementsByClassName('content-menu')[0];

	var scroll = window.pageYOffset || document.documentElement.scrollTop;

	if (scroll > 30) {
		header.className = "";
		nav.className = "";
	} else {
		header.className = "";
		nav.className = "";
	}
}

