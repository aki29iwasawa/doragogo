function writemypage(data) {



    //CSS

    changeCSS("../mypage/mypage/mypage.css", 0);

    //changScript("../mypage/js/mypage.js",3);



    var w = '<article><section><img class="photo" src="../img/sample.png" alt="顔写真"><h2>名前</h2>';

    w = w + '<div class="addressqr"><div class="address"><p>アドレス</p><p>';

    w = w + data.addr + '</p></div>';

    w = w + '<div class="qr"><p>QRコード</p><img src="img/QRsample.png" alt="QRコード"></div></div>';

    w = w + '<div class="gauge"><p>残り3ステップ</p><ol><li>1</li><li>2</li><li>3</li><li>4</li></ol></div>';

    w = w + '<p>必要な項目を入力してから、スカウトメッセージおよび仮想通貨を獲得できます。</p><button type="button" onclick="registration()">登録情報</button></section>';

    w = w + '<section><h2>履歴書</h2><button type="button" onclick="workexperience()">職務履歴</button>';

    w = w + '<button type="button" onclick="educational()">学歴</button>';

    w = w + '<button type="button" onclick="language()">語学力・資格</button>';

    w = w + '<button type="button" onclick="skill()">経験・スキル</button>';

    w = w + '<button type="button" onclick="desiredcondition()">希望条件</button>';

    w = w + '<button type="button" onclick="upload()">職務経歴書<br>アップロード</button>';

    w = w + '<button type="button" onclick="download()">PDF<br>ダウンロード</button></section>';

    w = w + '<section><button type="button" onclick="wallet()">財布</button></section>';

    w = w + '<section><p>企業メッセージを受信する<input type="checkbox" id="contakt"></p></section>';

    w = w + '<section><p><a href="#">利用規約</a></p><p><a href="#">プライバシーポリシー</a></p></section></article>';



    $("body").append("article").html(w);





    //document.write(w);

};





function registration() {

    $("article").remove();
    $("body").append("article");

    article.innerHTML = writeregistration();

}



function workexperience() {

    //    location.href = "../workexperience/workexperience.html";

}



function educational() {

    //  location.href = "../educational/educationalbackground.html";

}



function language() {

    //location.href = "../language/language.html";

}



function skill() {

    //location.href = "../skill/skill.html";

}



function desiredcondition() {

    // location.href = "../desiredcondition/desiredcondition.html";

}



function upload() {

    // location.href = "../upload/upload.html";

}



function download() {



}



function wallet() {

    // location.href = "../wallet/wallet.html";

}