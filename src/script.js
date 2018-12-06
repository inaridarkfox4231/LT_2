
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
  // とりあえずここでドットを描く。441個くらい。
  // それ以降はShiftキーで状態変化させる感じ。で、Enterで起爆して点を動かす。
  // Enterの度に最初の状態から・・Resetで戻して。
  // Enterで点が動き出す、その間操作禁止、動き終わったらResetで戻す（BackSpace, ボタンも作る）
  // 戻したらまたEnterで動かせるようになる、戻さなくてもShiftで別の状態を作れる、
  // その場合は自然にResetされる、って感じかなぁ。
  // あっちのビジュアライザーもEnterボタンとモード明示やった方がいいかもしれない。
  drawTest();
  drawTest();
}
