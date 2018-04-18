

/*
接收主线程的指令，开始干活
this是该线程本身，不是window!!!!
*/

var start,timer ;


this.onmessage = function (event) {
  console.log("子线程 recve: ", event.data );
  start = event.data;

  timer = setInterval(function() {
    start++;
    console.log(start);
    if (start === 120){
      clearInterval(timer);

      //给主线程发消息
      postMessage("ok");
      return;
    }
  }, 1000);
}
