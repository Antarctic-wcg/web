
setInterval(function() {
  var error = new Error("我错了", "error.js", "3");
  throw error;
}, 5000);
