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

window.addEventListener('load', function (evento){
	var galeryContainer = document.getElementById('img-content');

	for (var i = 1; i <= 6; i++) {
		/*creando divs*/
		var urlImg = 'assets/images/portfolio/'+ i +'.PNG';
		var div = document.createElement('div');
		var img = document.createElement('img');
		img.setAttribute('src', urlImg);
		img.setAttribute('class', '');
		div.setAttribute('class','img-portfolio');
		/*añadiendo a html*/
		div.appendChild(img);
		galeryContainer.appendChild(div);
		var galeria = document.getElementById("img-content");
		};
		var modal = document.getElementById("modal");
		var imgModal = document.getElementById("myImg");
		galeria.addEventListener('click', function(e){
			if (e.target.tagName == "IMG") {
	        modal.style.display = "block";
	        console.log (e.target.src);
	        imgModal.src = e.target.src;
	        } else{
	        	modal.style.display == "none";
	        }
	    });
	}); 
