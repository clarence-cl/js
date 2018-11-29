
	/* rem布局js函数  */
	function remFn(num){
			window.document.documentElement.style.fontSize = document.documentElement.clientWidth/num+'px';
		}
	    remFn(7.5);
	    window.onresize = function(){
	        remFn(7.5);              
	}

