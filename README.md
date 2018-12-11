# LT_2
線型変換の様子を点が動く形式で表現する。→https://inaridarkfox4231.github.io/LT_2/  
Enterキー又はボタンクリックでスタート。  
ShiftキーまたはShiftボタンでモードをチェンジする。モードは4つ。  
1. 線型補間：(1, 0, 0, 1)を1-t, tのパラメータで(a, b, c, d)まで持っていく。  
![sampleimages](https://github.com/inaridarkfox4231/LT_2/blob/gh-pages/demo/LT_2_demo1.gif)
2. 円補間：1-tとtの代わりにcosθ,sinθを使う。  
3. 格子変形：格子を引いたものを線型補間で変形させて変換先まで持っていく。  
![sampleimages](https://github.com/inaridarkfox4231/LT_2/blob/gh-pages/demo/LT_2_demo2.gif)
4. 画像：中央に配置された画像に原点中心で変換を行う（線型補間）。  
![sampleimages](https://github.com/inaridarkfox4231/LT_2/blob/gh-pages/demo/LT_2_demo3.gif)
5. 円：おまけ

4つのマスに数字を入れる（空欄、数字にならないものは弾かれる仕組み）。  
EnterキーまたはEnterボタンを押すとアニメーションが起動して、変換が終わると「終了」の文字が表示される。  
その間テキスト入力は不可。  
最後にEnterキーを押すと元に戻る（リセット）。
