// 変数関連

// 回す変数
var i, j, k, tmp;

var canvas = $('canvas')[0];  // $('canvas')[0]でやるとDOM要素となり、getContext等が使える
var field = $("#field");  // $('#field')でやるとタグ要素となり、cssをいじったりできる（？）
var ctx = canvas.getContext("2d");  // context要素

// なんか、canvas.heightで高さ（この場合は400）が出るらしい。

var blank = new Image();
blank.src = "./images/blank.png";

// 各種、色付きの点。
var dots = new Array();
for(i = 0; i < 5; i++){
  var dot = new Image();
  dot.src = "./images/colordot_" + i + ".png";
  dots.push(dot);
}
