function writeregistration(data) {



    changeCSS("../../mypage/registration/registrationinformation.css", 0);



    var w = '<article><form action="#" name="form">';

    w = w + '<button class="back" type="button" id="back">＜&nbsp;マイページへ</button>';

    w = w + '<button class="save" type="button" id="save">保存</button><h1>個人情報を編集</h1>';

    w = w + '<p class="contents"><label for="firstname">名</label></p><input class="text" type="input" name="firstname" id="firstname" placeholder="Liang"><p class="border"></p>';

    w = w + '<p class="contents"><label for="lastname">姓</label></p><input class="text" type="input" name="lastname" id="lastname" placeholder="Guo"><p class="border"></p>';

    w = w + '<p class="contents">性別</p><p><select name="gender" id="sex">';

    w = w + '<option value="" hidden>性別を選択</option><option value="男性" label="男性">男性</option><option value="女性" label="女性">女性</option>';

    w = w + '</select></p><p class="border"></p>';

    w = w + '<p class="contents">生年月日</p><input class="date" type="date" name="date" id="birthday"><p class="border"></p>';

    w = w + '<p class="contents">メール</p><p><input id="email"></input><button class="edit" type="button" id="mailedit"">編集</button></p><p class="border"></p>';

    w = w + '<p class="contents">電話番号</p><p><input id="tel"></input><button class="edit" type="button" id="teledit"">編集</button></p><p class="border"></p>';

    w = w + '<p class="contents"></p><p class="certificate">身分証明書<button class="edit" type="button" id="certedit"">編集</button></p><p class="border"></p</form></article>';

    $("body").append("article").html(w);



    $("#firstname").val(data.fname);

    $("#lastname").val(data.lname);

    $("#sex").val(data.sex);

    $("birthday").val(data.regdate);

    $("#email").val(data.loginid);

    $("#tel").val(data.tel);



    //画面上部へ

    $("html,body").animate({ scrollTop: 0 }, 600);



    //マイページへ戻る

    $("#back").on("click", function() {

        writemypage(data);

    });



    //全体保存click

    $("#save").on("click", function() {

        save(data);

    });



    //メール編集   

    $("#mailedit").on("click", function() {

        mailedit(data.loginid);

    });



    //電話番号編集

    $("#teledit").on("click", function() {

        teledit(data.tel);

    });



    //身分証明書編集

    $("#certedit").on("click", function() {

        certedit(data.tel);

    });





};



function save(data) {

    data.fname = $("firstname").val();
    data.lname = $("lastname").val();
    data.sex = $("#sex").val();
    data.birthday = $("birthday").val();
    data.loginid = $("#email").val();
    data.tel = $("#tel").val();

    console.log(data);

    $.ajax({

        url: "http://116.58.178.65:8545",
        //url: "http://10.8.1.18:8545",

        type: "POST",

        dataType: "json",

        headers: {

            'Content-Type': 'application/json'

        },

        data: JSON.stringify({

            "jsonrpc": "2.0",

            "method": "do_userUpdate",

            "params": [
                data,
                "0xd31a7421ad05f5589d438ca9bdc4d34ff1c1748c075fb1b1007bf425ea1797a0"
            ],

            "id": 67,

        }),

        success: function(data) {

            if (data.error) {

                alert('保存できませんでした');

                $("h1").after("<p class='attention'>入力項目を確認してください。</p>")

            } else {

                alert('変更を保存しました');

                $("article").remove();

                console.log(data);

                writeregistration(data);

            }
        }
    });
};