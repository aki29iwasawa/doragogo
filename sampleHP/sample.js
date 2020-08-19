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
form.name = "form";
/*form.onsubmit="return check"*/

div.appendChild(form);

/*ーメールアドレスー*/

form.innerHTML = "<p><label for='mail'>アカウントID</label></p>";

var input = document.createElement("input");
input.classList.add("box");
input.type = "email";
input.name = "mail"
input.id = "mail";
input.placeholder = "Email";

form.appendChild(input);


/*ーパスワードー*/
/*
form.innerHTML = "<p><label for='password'>パスワード</label></p>";

var input2 = document.createElement("input");
input2.classList.add("box");
input2.type = "password";
input2.name = "password";
input2.id = "password";
input2.placeholder = "●●●●●●";

form.appendChild(input2);




/*ーーーーーーーーdiv2 <p> リンク2行分を入れるーーーー */

var div2 = document.createElement("div2");
article.appendChild(div2);

div2.innerHTML = "<p class='link'><a href='#'>パスワードをお忘れですか？</a></p><p class='link'><a href='../loginform/html/signup.html'>新しくアカウントを作成</a></p>";