function touched(){
  var stratX = 0 , startY = 0,endX = 0, endY = 0;
  document.addEventListener("touchstart",function(e){
    stratX = e.targetTouches[0].clientX;
    stratY = e.targetTouches[0].clientY;
    // console.log(stratX,stratY);
  },false);
  document.addEventListener("touchend",function(e){
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;
    // console.log(endX,endY);

    if(stratX < endX && stratY < endY){
      console.log("右下移动");
    }else if(stratX === endX && stratY === endY){
      console.log("没有移动");
    }else if(stratX < endX && stratY > endY){
      console.log("右上移动");
    }else if(stratX > endX && stratY < endY){
      console.log("左下移动");
    }else if(stratX > endX && stratY > endY){
      console.log("左上移动");
    }else if(stratX < endX && stratY === endY){
      console.log("水平右移");
    }else if(stratX > endX && stratY === endY){
      console.log("水平左移");
    }else if(stratX === endX && stratY < endY){
      console.log("竖直下移");
    }else{
      console.log("竖直上移");
    }

  },false);
}
