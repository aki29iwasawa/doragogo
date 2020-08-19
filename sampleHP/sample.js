/*ーーーーーーーー外枠articleを作成ーーーーーーーーーー */

var article = document.createElement("article")
document.body.appendChild(article)


/*ーーーーーーーーロゴ画像の挿入ーーーーーーーーーーーー */

var img = document.createElement("img");
img.src = "../loginform/img/doragogo.png";
article.appendChild(img);


/*ーーーーーーーーdiv <h1>と<form>を入れるーーーーーー */
/*ーーdivの作成ーー */

var div = document.createElement("div");
article.appendChild(div);

/*ーー<h1>の作成ーー */

div.innerHTML = "<h1>Sign In<h1>";

/*ーー<form>の作成ーー */

var form = document.createElement("form");
div.appendChild(form);

var input = document.createElement("input");
form.appendChild(input);




/*ーーーーーーーーdiv2 <p> リンク2行分を入れるーーーー */

var div2 = document.createElement("div2");
article.appendChild(div2);

div2.innerHTML = "<p class='link'><a href='#'>パスワードをお忘れですか？</a></p><p class='link'><a href='../loginform/html/signup.html'>新しくアカウントを作成</a></p>";