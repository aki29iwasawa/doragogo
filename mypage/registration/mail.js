function writemail(data) {

    changeCSS("mail-phone.css", 0);

    var w = '<form action="#" name="form" onsubmit="return check()"><button class="save" type="submit" value="save">保存</button>';
    w = w + '<section><h1>メールアドレスを更新</h1>';
    w = w + '<p>Airbnbのパスワードも入力してください。</p><p>新しいメールアドレス確認のため、メールを送信いたします。</p></section>';
    w = w + '<p class="contents"><label for="mail">メールアドレス</label></p><input class="text" type="email" name="mail" id="mail" placeholder="Email"><p class="border"></p>';
    w = w + '<p class="contents"><label for="password">Airbnbのパスワード</label></p><input class="text" type="password" name="password" id="password" placeholder="パスワードを入力"><p class="border"></p></form>';

    $("body").append("article").html(w);

};




function check() {

    var count = 0;

    if (document.form.mail.value == "") {
        count = 1;
    } else if (document.form.password.value == "") {
        count = 1;
    }

    if (count) {
        alert('未入力項目があります');
        return false;
    } else {
        alert('保存しました')
        return true;
    }

}