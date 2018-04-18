
/*
获得整个浏览器滚动条滚动值
*/
function getScroll(){
  if(window.pageXOffset || window.pageYOffset){
    return {
      left: window.pageXOffset,
      top: window.pageYOffset
    };
  } else if (document.documentElement.scrollLeft || document.documentElement.scrollTop){
    return {
      left: document.documentElement.scrollLeft,
      top: document.documentElement.scrollTop
    };
  } else {
    return {
      left: document.body.scrollLeft,
      top: document.body.scrollTop
    };
  }
}
