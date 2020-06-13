function windowAddMouseWheel(callback, type) {
  var scrollFunc = function(e) {
    e = e || window.event;
    if (e.wheelDelta) {
      //判断浏览器IE，谷歌滑轮事件
      if (e.wheelDelta > 0) {
        //当滑轮向上滚动时
        if (type === 'prev') {
          callback();
        }
      }
      if (e.wheelDelta < 0) {
        //当滑轮向下滚动时
        if (type === 'next') {
          callback();
        }
      }
    } else if (e.detail) {
      //Firefox滑轮事件
      if (e.detail > 0) {
        //当滑轮向上滚动时
        if (type === 'prev') {
          callback();
        }
      }
      if (e.detail < 0) {
        //当滑轮向下滚动时
        if (type === 'next') {
          callback();
        }
      }
    }
  };
  //给页面绑定滑轮滚动事件
  if (document.addEventListener) {
    //火狐使用DOMMouseScroll绑定
    document.addEventListener("DOMMouseScroll", scrollFunc, false);
  }
  //其他浏览器直接绑定滚动事件
  window.onmousewheel = document.onmousewheel = scrollFunc;
}

export {
	windowAddMouseWheel
}