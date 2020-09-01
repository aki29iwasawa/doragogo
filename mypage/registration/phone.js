function writephone(data) {

    changeCSS("mail-phone.css", 0);

    var w = '<section><h1>電話番号を変更する</h1><p>通知、リマインダー、ログインのヘルプ用</p></section>';
    w = w + '<section><form action="#" name="form" onsubmit="return check()">';
    w = w + '<p class="contents"><label for="tel">電話番号</label></p><input class="text" type="tel" name="tel" id="tel" placeholder="090-0000-0000"><p class="border"></p>';
    w = w + '<button class="next" type="submit" id="next" value="next">次へ</button></form></section><p></p>';

    $("body").append("article").html(w);


};


function check() {

    var count = 0;

    if (document.form.tel.value == "") {
        count = 1;
    }

    if (count) {
        alert('未入力項目があります');
        return false;
    } else {
        alert('確認できました');
        return true;

    }

    /*　送信後にページ移動をしたい */

}

function next() {
    location.href = "../html/inputcode.html";
}

/*

function checkcode() {

    var count = 0;

    if (document.form2.code.value == "") {
        count = 1;
    }

    if (count) {
        alert('未入力項目があります');
        return false;
    } else {
        alert('確認できました')
        return true;
    };
}*/