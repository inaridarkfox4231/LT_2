// キーイベント関連

// スタートボタンの仕様
$('#Startbutton').click(function(){ init(); })
// エンターキーの仕様
$('#Enterbutton').click(function(){ enterKeyProcess(); })
// シフトキーの仕様
$('#Shiftbutton').click(function(){ shiftKeyProcess(); })

$(window).keydown(function(e){
  if(e.keyCode == K_ENTER){ enterKeyProcess(); } // エンターキー
  if(e.keyCode == K_SHIFT){ shiftKeyProcess(); } // シフトキー
})

// そのうち、上下キーで入力マスを移動できるようにしたい

// デバッグコード
/*
if(e.keyCode == 38){  // 上キー
  var ctx = getctx();
  ctx.drawImage(blank, 0, 0);
  var param = [];
  for(i = 1; i <= 6; i++){
    param.push($("#a" + i).val());
  }
  ctx.setTransform(param[0], param[1], param[2], param[3], param[4], param[5]);
  ctx.drawImage(darkfox, 0, 0);
}
  */
