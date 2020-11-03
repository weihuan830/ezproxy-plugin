setTimeout(function(){
	var  script=document.createElement('script');
	script.text = `
	let lnk = window.location.href;
	let redirect = [
		"ieeexplore",
		"acm.org",
		"sciencedirect"
		]
	if(window.location.href.indexOf("ezproxy") < 0){
		for(let i=0;i<redirect.length;i++){
			if(window.location.href.indexOf(redirect[i]) >= 0 && window.location.href.indexOf("pdf")<0){
				window.location.href="http://ezproxy.ust.hk/login?url="+window.location.href
			}
		}
	}
	`
	document.body.appendChild(script);
},1000);