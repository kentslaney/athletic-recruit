(function(){
	var fs=0, bs=0, sided, topimg, scroll=(function(){
		if(!sided) return
		var bounds=sided.getBoundingClientRect()
		if(bounds.top<=0){
			if(window.innerHeight<=bounds.bottom){
				fs=2
				document.body.classList.add('fixside')
			}else{
				bs=2
				document.body.classList.add('bottomside')
			}
		}else{
			topimg.style.marginTop=-0.25*window.pageYOffset
		}
		if(fs&&!--fs) document.body.classList.remove('fixside')
		if(bs&&!--bs) document.body.classList.remove('bottomside')
	})
	/** /window.onscroll=scroll
	/*/window.setInterval(scroll,10)/**/
	var showcredits=(function(e){
			e.preventDefault();
			var els=document.querySelectorAll('#cover, #credits');
			for(var i=els.length-1; i>=0; i--){
				els[i].classList.remove('hidden');
			}
			window.setTimeout((function(){for(var i=els.length-1; i>=0; i--){els[i].style.opacity=""}}),0);
			document.body.style.overflow="hidden"
		}), hidecredits=(function(){
			var els=document.querySelectorAll('#cover, #credits'), timeout,
				eventAction=(function(){
					els[0].removeEventListener(transitionEnd,eventAction);
					window.clearTimeout(timeout)
					for(var i=els.length-1; i>=0; i--){
						els[i].classList.add('hidden')
					}
					document.body.style.overflow=""
				});
			for(var i=els.length-1; i>=0; i--){
				els[i].style.opacity="0";
			}
			els[0].addEventListener(transitionEnd,eventAction);
			timeout=window.setTimeout(eventAction, 500);
		}), transitionEnd=(function(e,t){for(var i in t){if(e.style[i]!==undefined){return t[i]}}})
			(document.createElement('z'),{
				'transition':'transitionend',
				'Otransition':'otransitionEnd',
				'Moztransition':'transitionend',
				'Webkittransition':'webkittransitionEnd'
			})
	document.addEventListener("DOMContentLoaded", function(){
		console.log('load fired')
		document.getElementById('contact').href+=atob(("L29hqTSwqROeMJ50p2kuozI5YzAioD==").replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26)}))
		document.querySelector('.showcredits').onclick=showcredits
		document.querySelector('.hidecredits').onclick=hidecredits
		sided=document.querySelector('.sided')
		topimg=document.querySelector('.topimg')
		scroll()
	})
})()