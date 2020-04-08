(function(doc, win) {
  let docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      let clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 50* (clientWidth /320) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  document.addEventListener('touchstart',function (event) {//解决safri浏览器禁止缩放失效问题
    if(event.touches.length>1){
      event.preventDefault();
   }
  })

  /*document.body.addEventListener('touchstart',function (e) {//解决safri浏览器禁止缩放失效问题
    window.event? window.event.cancelBubble = true : e.stopPropagation();
  })*/
  let lastTouchEnd=0;
  document.addEventListener('touchend',function (event) {
    let now=(new Date()).getTime();
    if(now-lastTouchEnd<=300){
      event.preventDefault();
    }
    lastTouchEnd=now;
  },false)

  //判断客户端是否是iOS或者Android手机
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  // var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  let h = document.body.clientHeight;
  /*if (isAndroid){
    document.addEventListener('resize',function(){
      if (document.body.clientHeight < h) {
        document.getElementById("tabar").style.display="none";
      } else {
        document.getElementById("tabar").style.display="block";
      }
    })
  }*/
  document.addEventListener('resize',function(){
    if (document.body.clientHeight < h) {
      if ( isAndroid ){
        document.getElementById("tabar").style.display="none";
      } else {
        document.getElementById("tabar").style.display = "block";
      }
    }
  })
  /*document.body.addEventListener('touchmove', function (e) {
    e.preventDefault();
  }, {passive: false});*/
})(document, window);
