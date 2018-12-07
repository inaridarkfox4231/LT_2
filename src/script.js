
"use strict";  // これを書くと宣言されていない変数には代入できなくなるので重要
// 各種変数の宣言
$.ajax({url: "./src/variables.js", dataType: "script", async: false});
// 描画関数の用意
$.ajax({url: "./src/draw.js", dataType: "script", async: false});
// 各種更新処理
$.ajax({url: "./src/update.js", dataType: "script", async: false});
// 各種キーイベントの用意
$.ajax({url: "./src/keyevents.js", dataType: "script", async: false});

// loading()で画像をロードする。
