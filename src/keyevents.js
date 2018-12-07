// キーイベント関連

// スタートボタンの仕様
$('#Startbutton').click(function(){ init(); })

function cnt(){
  console.log(count);
  count -= 1;
  if(count == 0){ clearInterval(dotAnim); }
}

// Enterキーの仕様
$(window).keydown(function(e){
  if(e.keyCode == K_ENTER){
    if(state == TITLE){ init(); }
    if(state == WAIT){
      // 数字入力をバリデーションで
      // trueが返ったらstateをMOVINGにしてアニメーション開始
      // このタイミングでinputをdisableにする
      // アニメーション関連の記述はupdateに書く
      // 文字を「移動中」にして赤く点滅させたい
      // 移動が終わったら「移動完了(黒)」ってやりたい
      if(!(inputElem())){ return; }
      $('#state').css("color", "red");
      $('#state').text("移動中");
      count = 20;
      dotAnim = setInterval(cnt, 500);
      // state = MOVING; // 最後
      // dotAnimation();
    }
    if(state == FINISHED){
      // 最終的にはstateをWAITにする
      // 点の配置を元に戻す
      // inputのdisableを解除する
      // 文字を「待機中(青)」に戻す
    }
  }
})

// シフトキーの仕様
// 計算に使うパラメータをいじるだけ

// TODO: Enterキーで点が動き始める。移動中及び完了時はinputBoxをdisableにしておく。
// TODO: 移動終了後にEnterを押せば待機中に戻って編集可能になる。
// 250ミリ秒に1段階として、20段階？（つまり5秒）

// そのうち、上下キーで入力マスを移動できるようにしたい
