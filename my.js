    var imgs = document.querySelectorAll('img');
    //offsetTop是元素与offsetParent的距离，循环获取直到页面顶部
    function getTop(e) {
        var T = e.offsetTop;
        while(e = e.offsetParent) {
            T += e.offsetTop;
        }
        return T;
    }
    function lazyLoad(imgs) {
        var H = window.innerHeight;
        var S = document.documentElement.scrollTop || document.body.scrollTop;
        for (var i = 0; i < imgs.length; i++) {
            if (H + S > getTop(imgs[i])) {
                imgs[i].src = imgs[i].getAttribute('data-src');
            }
        }
    }
    // window.onload = window.onscroll = function () {
    //     lazyLoad(imgs);
    // }

    //地址参数
    var getQueryValue = function(key, href) {
      href = href?href:window.location.search;
      var match = href.match(new RegExp('[?&]' + key + '=([^&]*)'));
      return match && match[1] && decodeURIComponent(match[1]) || '';
    }

//返回顶部
function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }
})


//禁止底层滚动
function toggleBody(isPin){
	if(isPin){
		document.body.style.height = '100vh'
		document.body.style['overflow-y'] = 'hidden'
	}
	else{
		document.body.style.height = 'unset'
		document.body.style['overflow-y'] = 'auto'
	}
}
  //在跳出弹窗的时候 toggleBody(1)
  //弹窗消失的时候 toggleBody(0)
