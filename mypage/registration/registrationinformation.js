function writeregistration(data) {



    changeCSS("../../mypage/registration/registrationinformation.css", 0);



    var w = '<article><form action="#" name="form">';

    w = w + '<button class="back" type="button" id="back">＜&nbsp;マイページへ</button>';

    w = w + '<button class="save" type="button" id="save">保存</button><h1>個人情報を編集</h1>';

    w = w + '<p class="contents"><label for="firstname">名</label></p><input class="text" type="input" name="firstname" id="firstname" placeholder="Liang"><p class="border"></p>';

    w = w + '<p class="contents"><label for="lastname">姓</label></p><input class="text" type="input" name="lastname" id="lastname" placeholder="Guo"><p class="border"></p>';

    w = w + '<p class="contents">性別</p><p><select name="gender">';

    w = w + '<option value="" hidden>性別を選択</option><option value="male" label="男性">男性</option><option value="female" label="女性">女性</option>';

    w = w + '</select></p><p class="border"></p>';

    w = w + '<p class="contents">生年月日</p><input class="date" type="date" name="date"><p class="border"></p>';

    w = w + '<p class="contents">メール</p><p><input id="email"></input><button class="edit" type="button" id="mail-edit"">編集</button></p><p class="border"></p>';

    w = w + '<p class="contents">電話番号</p><p><input id="tel"></input><button class="edit" type="button" id="tel-edit"">編集</button></p><p class="border"></p>';

    w = w + '<p class="contents"></p><p class="certificate">身分証明書<button class="edit" type="button" id="cert-edit"">編集</button></p><p class="border"></p</form></article>';





    $("body").append("article").html(w);

    $("#firstname").val(data.fname);

    $("#lastname").val(data.lname);

    $("#email").val(data.loginid);

    $("#tel").val(data.tel);


    //マイページへ戻る

    $("#back").on("click", function() {

        writemypage(data);

    });


    //全体保存click

    $("#save").on("click", function() {

        save(data);

    });



    //メール編集   

    $("#mail-edit").on("click", function() {

        mail - edit(data.loginid);

    });



    //電話番号編集

    $("#tel-edit").on("click", function() {

        tel - edit(data.tel);

    });



    //身分証明書編集

    $("#cert-edit").on("click", function() {

        cert - edit(data.tel);

    });





};







/*

function save() {



    var count = 0;



    if (document.form.firstname.value == "") {

        count = 1;

    } else if (document.form.lastname.value == "") {

        count = 1;

    } else if (document.form.gender.value == "") {

        count = 1;

    } else if (document.form.date.value == "") {

        count = 1;

    }



    if (count) {

        alert('未入力項目があります');

        return false;

    } else {

        alert('保存しました')

        return true;

    }



}*/