// 描画関連

function drawInit(){
  var ctx = getctx();
  ctx.setTransform(1, 0, 0, 1, 0, 0); // Transformのリセット
  ctx.drawImage(blank, 0, 0);
  if(mode == 0 || mode == 1){
    drawAxis(ctx);
    drawDots(ctx, 1, 0, 0, 1);
  }else if(mode == 2){
    drawLattice(ctx, 1, 0, 0, 1);
  }else if(mode == 3){
    ctx.drawImage(darkfox, 100, 100);
  }else if(mode == 4){
    ctx.drawImage(circle, 100, 100);
  }
}

// ベース、および座標軸を描画する関数
function drawAxis(ctx){
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

// 軸ベクトルを描く
function drawAxisVector(ctx, x1, y1, x2, y2){
  ctx.beginPath();
  ctx.arrow(200, 200, 200 + x1, 200 + y1, [0, 1, -10, 1, -10, 5]);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.beginPath();
  ctx.arrow(200, 200, 200 + x2, 200 + y2, [0, 1, -10, 1, -10, 5]);
  ctx.fillStyle = "blue";
  ctx.fill();
}

// 格子を描く（22本）
function drawLattice(ctx, a, b, c, d){
  // 線を引く
  ctx.beginPath();
  ctx.strokeStyle = "#bbb";
  // 全部引くと処理が落ちるので、画面内に20刻みで42本だけ引いたものを変形する
  for(i = -10; i <= 10; i++){
    ctx.moveTo(200 + 20 * a * i + 20 * b * 10, 200 - 20 * c * i - 20 * d * 10);
    ctx.lineTo(200 + 20 * a * i + 20 * b * (-10), 200 - 20 * c * i - 20 * d * (-10));
    ctx.stroke();
  }
  for(j = -10; j <= 10; j++){
    ctx.moveTo(200 + 20 * a * (-10) + 20 * b * j, 200 - 20 * c * (-10) - 20 * d * j);
    ctx.lineTo(200 + 20 * a * 10 + 20 * b * j, 200 - 20 * c * 10 - 20 * d * j);
    ctx.stroke();
  }
  // 座標軸を描く
  drawAxis(ctx);
  // 軸ベクトルの描画。二つの矢印（x方向の赤とy方向の青）を表示。
  drawAxisVector(ctx, 40 * a, -40 * c, 40 * b, -40 * d);
}
