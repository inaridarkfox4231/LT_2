// 初期化。
function init(){
  "use strict";  // これを書くと宣言されていない変数には代入できなくなるので重要
  // 各種変数の宣言
  $.ajax({url: "./src/variables.js", dataType: "script", async: false});
  // 各種キーイベントの用意
  $.ajax({url: "./src/keyevents.js", dataType: "script", async: false});
  var ctx = getctx();
  loading();
  ctx.drawImage(blank, 0, 0);
  ctx.beginPath();
  ctx.arrow(200, 400, 200, 0, [0, 1, -10, 1, -10, 5]);
  ctx.arrow(0, 200, 400, 200, [0, 1, -10, 1, -10, 5]);
  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.drawImage(dots[2], 197, 197);
}
