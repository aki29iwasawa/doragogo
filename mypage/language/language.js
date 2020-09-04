function language(data) {



    changeCSS("../../mypage/language/language.css", 0);



    var w = '<article><form action="#" name="form">';
    w = w + '<button class="back" type="button" id="back">＜&nbsp;マイページへ</button>';
    w = w + '<button class="save" type="button" id="save">保存</button>';

    w = w + '<h1>語学力・資格</h1><h2>語学力</h2>';

    w = w + '<section><p class="contents">言語</p><p>';
    w = w + '<select name="language"><option value="" hidden>言語を選択</option><option value="English">英語</option><option value="German">ドイツ語</option><option value="French">フランス語</option><option value="Spanish">スペイン語</option><option value="Portuguese">ポルトガル語</option>';
    w = w + '<option value="Italian">イタリア語</option><option value="Beijing">中国語（北京語）</option><option value="Cantonese">中国語（広東語）</option><option value="Korea">韓国語</option><option value="Russian">ロシア語</option><option value="Malay">マレーシア語</option><option value="Vietnamese">ベトナム語</option>';
    w = w + '<option value="Thai">タイ語</option><option value="Japanese">日本語</option><option value="Turk">トルコ語</option><option value="Indonesian">インドネシア語</option><option value="Arabic">アラビア語</option><option value="other">その他</option></select></p>';
    w = w + '<p class="border"></p>';

    w = w + '<p class="contents">会話力</p><p><select name="speaking">';
    w = w + '<option value="" hidden>会話力を選択</option><option value="1">外国語で打ち合わせや交渉ができる</option><option value="2">流暢ではないがある程度の日常会話ができる</option><option value="3">学校で外国語を学び、外国語に対してある程度抵抗がない</option>';
    w = w + '</select></p><p class="border"></p>';

    w = w + '<p class="contents">読解力</p><p><select name="reading">';
    w = w + '<option value="" hidden>読解力を選択</option><option value="1">資料・報告書などの読解には支障がない</option><option value="2">辞書を利用して文章が理解できる</option><option value="3">学校で外国語を学び、外国語に対してある程度抵抗がない</option>';
    w = w + '</select></p><p class="border"></p>';

    w = w + '<p class="contents">作文力</p><p><select name="writing">';
    w = w + '<option value="" hidden>作文力を選択</option><option value="1">報告書や手紙を正しく書ける</option><option value="2">辞書を利用して報告書や手紙を正しく書ける</option><option value="3">学校で外国語を学び、外国語に対してある程度抵抗がない</option>';
    w = w + '</select></p><p class="border"></p>';

    w = w + '<p class="contents">ビジネス利用経験</p><input class="text" type="text" name="ex-business" id="ex-business">&emsp;年';
    w = w + '<p class="border"></p>';

    w = w + '</section><button class="add" type="button">言語を追加する</button><h2>資格</h2>';

    w = w + '<section><div><input class="qualification" type="text" name="qualification"></input>';
    w = w + '<p class="border"></p></div></section></form></article>';

    $("body").append("article").html(w);



    //マイページへ戻る

    $("#back").on("click", function() {

        writemypage(data);

    });


};