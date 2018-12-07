// キーイベント関連

// スタートボタンの仕様
$('#Startbutton').click(function(){ init(); })
// エンターキーの仕様
$('#Enterbutton').click(function(){ enterKeyProcess(); })

// Enterキーの仕様
$(window).keydown(function(e){
  if(e.keyCode == K_ENTER){ enterKeyProcess(); }
})

// シフトキーの仕様
// 計算に使うパラメータをいじるだけ

// そのうち、上下キーで入力マスを移動できるようにしたい
