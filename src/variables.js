// 変数関連

// 回す変数
var i, j, k, tmp;

// 背景
var blank = new Image();

// 各種、色付きの点。
var dots = new Array();

// 4つの成分の配列elemを作る
var elem = [1, 0, 0, 1];

// State変数
const TITLE = 0;    // タイトル、ここでEnterするとWAIT.
const WAIT = 1;     // 待機中。
const MOVING = 2;   // 移動中。
const FINISHED = 3; // 移動完了。
var state = TITLE;  // タイトルからスタート

// keyCode(EnterとShiftだけ。)
var K_ENTER =13;
var K_SHIFT = 16;

// mode変数（0か1）
var mode = 0;

// contextの取得
function getctx(){
  var canvas = $('canvas')[0];
  var ctx = canvas.getContext("2d");
  return ctx;
}

// 画像のロード
function loading(){
  blank.src = "./images/blank.png";
  for(i = 0; i < 5; i++){
    var dot = new Image();
    dot.src = "./images/colordot_" + i + ".png";
    dots.push(dot);
  }
}
