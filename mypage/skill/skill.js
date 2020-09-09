function skill(data) {

    changeCSS("../../mypage/skill/skill.css", 0);

    var w = '<article><form action="#" name="form">';

    w = w + '<button class="back" type="button" id="back">＜&nbsp;マイページへ</button>';
    w = w + '<button class="save" type="button" id="save">保存</button>';

    w = w + '<h1>経験・スキル</h1><section><div>';
    w = w + '<p class="contents">企画営業・法人営業・個人営業・MR・その他営業関連</p><p>7年';
    w = w + '<button class="delete" type="button" id="delete">削除</button>';
    w = w + '</p><p class="border"></p>';
    w = w + '<button class="add" type="button" id="addskill">職種経験を追加</button>';
    w = w + '</section></form></article>';

    $("body").append("article").html(w);


    //マイページへ戻る

    $("#back").on("click", function() {

        writemypage(data);

    });

    //職歴を追加

    $("#addskill").on("click", function() {

        skilloccu(data);

    });


}