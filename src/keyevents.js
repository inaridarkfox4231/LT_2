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
