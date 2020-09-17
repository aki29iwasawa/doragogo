function skill(data) {

    changeCSS("../../mypage/skill/skill.css", 0);

    var w = '<article><form action="#" name="form">';

    w = w + '<button class="back" type="button" id="back">＜&nbsp;マイページへ</button>';
    w = w + '<button class="save" type="button" id="save">保存</button>';

    w = w + '<h1>経験・スキル</h1><section><div>';
    w = w + '<p class="contents">経験職種</p><p>経験年数';
    w = w + '<button class="delete">削除</button>';
    w = w + '</p><p class="border"></p>';
    w = w + '<button class="add" type="button" id="addskill">職種経験を追加</button>';
    w = w + '</section></form></article>';

    $("body").append("article").html(w);



    if (sessionStorage.getItem('skill01') && sessionStorage.getItem('skill02')) {

        var skill01 = sessionStorage.getItem('skill01').split(',');
        var skill02 = sessionStorage.getItem('skill02').split(',');

        for (var i = 0; i < skill01.length; i++) {
            $(".add").before('<p class="contents">' + skill01[i] + '</p><p>' + skill02[i] + '<button class="delete">削除</button></p><p class="border"></p>');
        }

    }


    //マイページへ戻る


    $("#back").on("click", function() {

        writemypage(data);

    });


    //職歴を追加

    $("#addskill").on("click", function() {

        skilloccu(data);

    });



    //削除
    $(".delete").on("click", function() {

        var i = $('.delete').index(this);

        console.log(i);

        if (sessionStorage.getItem("skill01") && sessionStorage.getItem("skill02")) {

            var skill01 = sessionStorage.getItem('skill01').split(',');
            var skill02 = sessionStorage.getItem('skill02').split(',');

            skill01.splice(index, 1)
            skill02.splice(index, 1)

            sessionStorage.setItem('skill01');
            sessionStorage.setItem('skill02');

        };

        skill(data);

    });
};