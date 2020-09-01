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
        return true;
    }

}

		    

$(function() {
    $('#button').on("click", function() {
    
        if (!check()) return;

        var mail = $("#mail").val();
        var password = $("#password").val();
        $.ajax({
            //url: "http://116.58.178.65:8545",
            url: "http://10.8.1.18:8545",
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
                if (data.error) {
                    alert('ログインにエラー');
                    $("h1").after("<p class='attention'>メールアドレスとパスワードを確認してください</p>")
                } else {
                    alert('ログインに成功');
                    $("article").remove();
		    console.log(data.result);
                    //mypageへ
                    writemypage(data.result);


                };

            }
        });
    });

});
//つぎ画面への処理

/*

$("article").append("<textarea>");

$("textarea").val(JSON.stringify(data));
$("textarea").attr("cols", 60);
$("textarea").attr("rows", 20);
*/
