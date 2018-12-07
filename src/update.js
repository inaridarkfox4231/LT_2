// 更新処理関連

// 初期化（Startbuttonを押すか、Enter押したときの処理）
function init(){
  drawInit();
  $('#Startbutton').hide();
  $('#mode').show();
  $('.config').show();
  state = WAIT;
}
