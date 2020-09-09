function skilloccu(data) {

    changeCSS("../../mypage/skill/skilloccu.css", 0);

    var w = '<article><section class="main"><h1>経験職種を選択</h1>';
    w = w + '<section><h2>営業</h2><div>';
    w = w + '<p>企画営業・法人営業・個人営業・MR・その他営業関連<button class="skill-years" type="button" id="skill-years">＞</button></p><p>テレマーケティング・コールセンター<button class="skill-years" type="button" id="">＞</button></p><p>キャリアカウンセラー・人材コーディネーター<button class="skill-years" type="button" id="">＞</button></p></div>';
    w = w + '</section><p class="border"></p>';
    w = w + '</section></article>';
    /*w = w + '';
    w = w + '';
    w = w + '';*/

    $("body").append("article").html(w);



}