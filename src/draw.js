// 描画関連

function drawTest(){
  var ctx = getctx();
  drawAxis(ctx);
  // TODO: 21×21個の点を描画する
  drawDots(ctx, 1, 0, 0, 1);
}

// ベース、および座標軸を描画する関数
function drawAxis(ctx){
  ctx.drawImage(blank, 0, 0);
  ctx.beginPath();
  ctx.arrow(200, 400, 200, 0, [0, 1, -10, 1, -10, 5]); // 座標軸
  ctx.arrow(0, 200, 400, 200, [0, 1, -10, 1, -10, 5]);
  ctx.fillStyle = "#000";
  ctx.fill();
}

// ドット群を描画する関数(1, 0, 0, 1がデフォルト)
function drawDots(ctx, a, b, c, d){
  for(i = -9; i < 10; i++){
    ctx.drawImage(dots[0], 197 + 20 * i * a, 197 - 20 * i * c);
    ctx.drawImage(dots[0], 197 + 20 * i * b, 197 - 20 * i * d);
  }
  for(i = 1; i < 10; i++){
    for(j = 1; j < 10; j++){
      ctx.drawImage(dots[1], 197 + 20 * (i * a + j * b), 197 - 20 * (i * c + j * d));
      ctx.drawImage(dots[2], 197 + 20 * (-i * a + j * b), 197 - 20 * (-i * c + j * d));
      ctx.drawImage(dots[3], 197 + 20 * (-i * a - j * b), 197 - 20 * (-i * c - j * d));
      ctx.drawImage(dots[4], 197 + 20 * (i * a - j * b), 197 - 20 * (i * c - j * d));
    }
  }
}

// 最初はこれが発動する、で、それによりFalseがTrueになって、
// それ以降はアニメーションの起爆スイッチになる（予定）

// Enter押すと4つの成分がelemに入って（空欄とかあると・・そこはバリデーションで防ぐ）
// アニメーションが開始、その間は入力不可（flag制御）
// 終わったら・・そこでEnter押してもまた同じ状況からアニメーション出るようにしようかな、
// バックスペースかなんかで点の配置を戻すこともできる（任意）

// TODO: 点の配置をリセットする関数

// TODO: 点の移動のアニメーションを行う関数
