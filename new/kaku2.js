//var d2 = document.getElementById("article");
var w = "<img src='../loginform/img/doragogo.png' alt='ロゴ画像'>";
w = w + "<div><h1>Sign In</h1>";
w = w + '<form name="f">';
w = w + '<p><label for="mail">アカウントID</label></p>';
w = w + '<input class="box" type="email" name="mail" id="mail" placeholder="Email">';
w = w + '<p><label for="password">パスワード</label></p>';
w = w + '<input class="box" type="password" name="password" id="password" placeholder="●●●●●●">';
w = w + ' <p><input class="button" type="button" id="button" value="Sign in" ></p>';
w = w + "</form></div>";
w = w + "<p class='link'><a href='#'>パスワードをお忘れですか？</a></p><p class='link'><a href='../loginform/html/signup.html'>新しくアカウントを作成</a></p>";

document.write(w);
/*社外　url: "http://116.58.178.65:8545",*/
/*社内　url: "http://10.8.1.18:8545",*/


$(function() {

    $("#button").on("click", function() {

        var count = 0;

        const mail = document.getElementById("mail");
        const passwd = document.getElementById("password");
        if (mail.value == "") {
            count = 1;
        } else if (passwd.value == "") {
            count = 1;
        }

        if (count) {
            alert('未入力項目があります');
            return false;
        } else {
            return true;
        }
    });

    $('#button').on("click", function() {

        var mail = $("#mail").val();
        var password = $("#password").val();
        $.ajax({
            url: "http://116.58.178.65:8545",
            type: "POST",
            dataType: "json",
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "jsonrpc": "2.0",
                "method": "do_login",
                "params": [
                    mail,
                    password,
                    "0xd31a7421ad05f5589d438ca9bdc4d34ff1c1748c075fb1b1007bf425ea1797a0"
                ],
                "id": 67,
            }),

            success: function(data) {
                console.log(data);
                if (data.error) {
                    alert('ログインにエラー');
                } else {
                    alert('ログインに成功');
                };
                //つぎ画面への処理

                $("article").remove();

                $("body").append("<article>")

                $("article").append("<textarea>");

                $("textarea").val(JSON.stringify(data));
                $("textarea").attr("cols", 60);
                $("textarea").attr("rows", 20);
            }
        });
    });

});