function desiredcondition(data) {

    changeCSS("../../mypage/desiredcondition/desiredcondition.css", 0);

    var w = '<article><form action="#" name="form">';

    w = w + '<button class="back" type="button" id="back">＜&nbsp;戻る</button>';
    w = w + '<h1>希望条件</h1><p class="name">名前</p>';

    w = w + '<p class="contents">希望職種<button class="choice" type="button" id="occupation">選択</button></p>';
    w = w + '<p class="border"></p>';

    w = w + '<p class="contents">希望業種<button class="choice" type="button" id="industry">選択</button></p>';
    w = w + '<p class="border"></p>';

    w = w + '<p class="contents">希望勤務国<button class="choice" type="button" id="country">選択</button></p>';
    w = w + '<p class="border"></p>';

    w = w + '<p class="contents">希望勤務地<button class="choice" type="button" id="area">選択</button>';
    w = w + '</p><p class="border"></p>';

    w = w + '<p class="contents">希望雇用形態<span class="nomal">雇用形態を選択（複数選択可）</span></p>';
    w = w + '<p class="checkbox"><input type="checkbox" name="status" value="fulltime">正社員<input type="checkbox" name="status" value="contract">契約社員<input type="checkbox" name="status" value="consignment">業務委託<input type="checkbox" name="status" value="other">その他</p>';
    w = w + '<p class="borderL"></p>';

    w = w + '<p class="contents">希望年収<select name="income">';
    w = w + '<option value="">--</option><option value="200万円">200万円</option><option value="250万円">250万円</option><option value="300万円">300万円</option><option value="350万円">350万円</option><option value="400万円">400万円</option><option value="450万円">450万円</option><option value="500万円">500万円</option><option value="550万円">550万円</option><option value="600万円">600万円</option><option value="650万円">650万円</option><option value="700万円">700万円</option><option value="750万円">750万円</option><option value="800万円">800万円</option><option value="850万円">850万円</option>';
    w = w + '<option value="900万円">900万円</option><option value="950万円">950万円</option><option value="1000万円">1000万円</option><option value="1050万円">1050万円</option><option value="1100万円">1100万円</option><option value="1150万円">1150万円</option><option value="1200万円">1200万円</option><option value="1250万円">1250万円</option><option value="1300万円">1300万円</option><option value="1350万円">1350万円</option><option value="1400万円">1400万円</option><option value="1450万円">1450万円</option><option value="1500万円">1500万円</option>';
    w = w + '</select>以上</p><p class="borderL"></p>';

    w = w + '<div class="button"><button class="add" type="button" id="cancel">キャンセル</button>';
    w = w + '<button class="add" type="button" onclick="#">更新する</button></div></form></article>';


    $("body").append("article").html(w);

    //マイページへ戻る

    $("#back").on("click", function() {

        writemypage(data);

    });

    $("#occupation").on("click", function() {

        occupation(data);

    });

    $("#cancel").on("click", function() {

        desiredcondition(data);

    });





};