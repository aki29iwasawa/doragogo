/*ーーーーーーーー外枠articleを作成ーーーーーーーーーー */

var article = document.createElement("article")
document.body.appendChild(article)


/*ーーーーーーーーロゴ画像の挿入ーーーーーーーーーーーー */

var img = document.createElement("img");
img.src = "../loginform/img/doragogo.png";
article.appendChild(img);


/*ーーーーーーーーdiv <h1>と<form>を入れるーーーーーー */
/*ーーーーdivの作成ーーーー */

var div = document.createElement("div");
article.appendChild(div);

/*ーーーー<h1>の作成ーーーー */

div.innerHTML = "<h1>Sign In<h1>";

/*ーーーー<form>の作成ーーーー */

var form = document.createElement("form");
form.action = "#";
form.name = "form";

form.onsubmit = "return check()";

div.appendChild(form);


/*
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

}*/




/*ーメールアドレスー*/

form.innerHTML = "<p><label for='mail'>アカウントID</label></p >";
form.innerHTML = form.innerHTML + "<input class=box type=email name=mail id=mail placeholder='Email' />";


/*ーパスワードー*/

form.innerHTML = form.innerHTML + "<p><label for='password'>パスワード</label></p >";
form.innerHTML = form.innerHTML + "<input class=box name=passeord id=password type=password placeholder='●●●●●●' />";


/*ーsubmitボタンー */

form.innerHTML = form.innerHTML + "<input class='button' type='submit' value='Sign in'>";



/*ーーーーーーーーdiv2 <p> リンク2行分を入れるーーーー */

var div2 = document.createElement("div2");
article.appendChild(div2);

div2.innerHTML = "<p class='link'><a href='#'>パスワードをお忘れですか？</a></p><p class='link'><a href='../loginform/html/signup.html'>新しくアカウントを作成</a></p>";