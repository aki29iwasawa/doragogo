function writemypage(data) {



    //CSS

    changeCSS("../../mypage/mypage/mypage.css", 0);

    //changScript("../mypage/js/mypage.js",3);



    var w = '<article id="article"><section><img class="photo" src="../img/sample.png" alt="顔写真"><h2>名前</h2>';

    w = w + '<div class="addressqr"><div class="address"><p>アドレス</p><p>';

    w = w + data.addr + '</p></div>';

    w = w + '<div class="qr"><p>QRコード</p><img src="img/QRsample.png" alt="QRコード"></div></div>';

    w = w + '<div class="gauge"><p>残り3ステップ</p><ol><li>1</li><li>2</li><li>3</li><li>4</li></ol></div>';

    w = w + '<p>必要な項目を入力してから、スカウトメッセージおよび仮想通貨を獲得できます。</p><button type="button" id="reg">登録情報</button></section>';

    w = w + '<section><h2>履歴書</h2><button type="button" id="resum" >職務履歴</button>';

    w = w + '<button type="button" id="educational">学歴</button>';

    w = w + '<button type="button" id="language">語学力・資格</button>';

    w = w + '<button type="button" id="skill">経験・スキル</button>';

    w = w + '<button type="button" id="desiredcondition">希望条件</button>';

    w = w + '<button type="button" id="upload">職務経歴書<br>アップロード</button>';

    w = w + '<button type="button" id="download">PDF<br>ダウンロード</button></section>';

    w = w + '<section><button type="button" id="wallet">財布</button></section>';

    w = w + '<section><p>企業メッセージを受信する<input type="checkbox" id="contakt"></p></section>';

    w = w + '<section><p><a href="#">利用規約</a></p><p><a href="#">プライバシーポリシー</a></p></section></article>';



    $("body").append("article").html(w);



    　　 //個人情報編集   

    $("#reg").on("click", function() {

        writeregistration(data);

    });



    　 //履歴書  

    $("#resum").on("click", function() {

        resum(data);

    });



    　 //学歴           

    $("#educational").on("click", function() {

        educational(data);

    });



    //語学力資格

    $("#langage").on("click", function() {

        language(data);

    });


    //経験・スキル

    $("#skill").on("click", function() {

        skill(data);

    });


    //希望条件

    $("#desiredcondition").on("click", function() {

        desiredcondition(data);

    });


    //アップロード

    $("#upload").on("click", function() {

        upload(data);

    });


    //ダウンロード

    $("#download").on("click", function() {

        download(data);

    });


    //財布

    $("#wallet").on("click", function() {

        wallet(data);

    });





    //....

    //





}