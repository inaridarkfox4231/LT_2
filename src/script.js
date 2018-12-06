
"use strict";  // これを書くと宣言されていない変数には代入できなくなるので重要
// 各種変数の宣言
$.ajax({url: "./src/variables.js", dataType: "script", async: false});
// 各種キーイベントの用意
$.ajax({url: "./src/keyevents.js", dataType: "script", async: false});
// 描画関数の用意
$.ajax({url: "./src/draw.js", dataType: "script", async: false});

// 初期化。
function init(){
  loading();
  $('#Startbutton').focus(); // こうすればEnterキー押しても始まる、はず
}
