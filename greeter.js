var Omikuji = (function () {
    function Omikuji() {
        // ボタン要素
        var buttonElement = document.getElementById("btn");
        // 結果要素
        var resultElement = document.getElementById("result");
        // ボタンクリック時の処理
        buttonElement.onclick = function (e) {
            // 結果を格納
            var results = ["大吉", "小吉", "中吉", "凶"];
            // 乱数を生成
            var result = Math.floor(Math.random() * 4);
            // 乱数に基づいた結果を表示
            resultElement.innerText = results[result];
        };
    }
    return Omikuji;
})();
var omikuji = new Omikuji();
