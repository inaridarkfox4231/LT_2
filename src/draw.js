function drawTest(){
  var ctx = getctx();
  console.log('%s %d', "draw", 2)
  ctx.drawImage(blank, 0, 0);
  ctx.beginPath();
  ctx.arrow(200, 400, 200, 0, [0, 1, -10, 1, -10, 5]);
  ctx.arrow(0, 200, 400, 200, [0, 1, -10, 1, -10, 5]);
  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.drawImage(dots[2], 197, 197);
}
