// 更新処理関連

// 初期化（Startbuttonを押すか、Enter押したときの処理）
function init(){
  drawInit();
  $('#Startbutton').hide();
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

// 点の描画を繰り返す処理
