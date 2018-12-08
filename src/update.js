// 更新処理関連

// 初期化（Startbuttonを押すか、Enter押したときの処理）
function init(){
  drawInit();
  $('#Startbutton').hide();
  $('#explain').hide();
  $('#mode').show();
  $('.config').show();
  state = WAIT;
}

// elemにマスの数字を格納する処理（成功したらtrueを返す）
function inputElem(){
  var a = $('#elem00').val(), b = $('#elem01').val(), c = $('#elem10').val(), d = $('#elem11').val();
  if(a == "" || b == "" || c == "" || d == ""){ return false; }
  a = Number(a), b = Number(b), c = Number(c), d = Number(d);
  if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)){ return false; }
  elem[0] = a, elem[1] = b, elem[2] = c, elem[3] = d;
  return true;
}

function interPolation(count){
  // 1, 0, 0, 1とa, b, c, dの間のデータ補間
  var ctx = getctx();
  var a = elem[0], b = elem[1], c = elem[2], d = elem[3];
  ctx.drawImage(blank, 0, 0);
  if(mode == 0){
    tmp = count / 50;
    if(count == 50){ tmp = 1; }
    drawAxis(ctx);
    drawDots(ctx, 1 - tmp + tmp * a, tmp * b, tmp * c, 1 - tmp + tmp * d);
  }else if(mode == 1){
    var cosine = Math.cos((count * 1.8) * (Math.PI / 180));
    var sine = Math.sin((count * 1.8) * (Math.PI / 180));
    if(count == 50){ cosine = 0, sine = 1;}
    drawAxis(ctx);
    drawDots(ctx, cosine + sine * a, sine * b, sine * c, cosine + sine * d);
  }else if(mode == 2){
    tmp = count / 50;
    if(count == 50){ tmp = 1; }
    drawLattice(ctx, 1 - tmp + tmp * a, tmp * b, tmp * c, 1 - tmp + tmp * d);
  }else if(mode == 3){
    tmp = count / 50;
    if(count == 50){ tmp = 1; }
    a = 1 - tmp + tmp * a, b = tmp * b, c = tmp * c, d = 1 - tmp + tmp * d;
    ctx.setTransform(a, -c, -b, d, 100 * (2 - a + b), 100 * (2 + c - d));
    // どうやら(a, b \\ c, d)による変換は「(a, -c, -b, d, 100 * (2 - a + b), 100 * (2 + c - d))」でいけるらしい！
    // 適当だなオイ。でもまぁそんなもんよね。
    ctx.drawImage(darkfox, 0, 0);
  }
}

// 点の描画を繰り返す処理
function dotAnim(){
  count += 1;
  interPolation(count);
  if(Math.floor(count / 5) % 2 == 1){ $('#state').hide(); }else{ $('#state').show(); } // 点滅処理
  if(count == 50){
     clearInterval(timer);
     count = 0;
     $('#state').css("color", "black");
     $('#state').text("移動完了")
     state = FINISHED;
   }
}

// WAIT→MOVINGの遷移処理
// 数字入力をバリデーションで
// trueが返ったらstateをMOVINGにしてアニメーション開始
// このタイミングでinputをdisableにする
// アニメーション関連の記述はupdateに書く
// 文字を「移動中」にして赤く点滅させたい
// 移動が終わったら「移動完了(黒)」ってやりたい
function startMove(){
  if(!(inputElem())){ return; }
  $('#state').css("color", "red");
  $('#state').text("移動中");
  $('.element').prop("disabled", true);
  timer = setInterval(dotAnim, 100);
  state = MOVING;
}
// FINISHED→WAITの遷移処理
// 最終的にはstateをWAITにする
// 点の配置を元に戻す
// inputのdisableを解除する
// 文字を「待機中(青)」に戻す
function initState(){
  $('#state').css("color", "blue");
  $('#state').text("待機中");
  $('.element').prop("disabled", false);
  drawInit();
  state = WAIT;
}

function enterKeyProcess(){
  if(state == TITLE){ init(); }
  if(state == WAIT){ startMove(); }
  if(state == FINISHED){ initState(); }
}

function shiftKeyProcess(){
  if(state == WAIT){
    mode = (mode + 1) % NUM_OF_MODE;  // こうすればモードを増やしてもコードいじらなくてよくなる
    $('#mode').text(modenames[mode]);
    drawInit();
  }
}
