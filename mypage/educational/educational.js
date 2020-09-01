function educational(data) {


    changeCss("educationalbackground.css", 0);

    var w = '<article><form action="#" name="form">';
    w = w + '<button class="back" type="button">＜&nbsp;戻る</button>    ';
    w = w + '<button class="save" type="button">保存</button>';

    w = w + '<h1>最終学歴</h1><section';

    w = w + '<p class="contents">学校種別&nbsp;<select name="schooltype">';
    w = w + '<option value="">--</option><option value="大学院">大学院</option><option value="大学">大学</option><option value="短期大学">短期大学</option><option value="専修・各種学校">専修・各種学校</option><option value="高等専門学校">高等専門学校</option><option value="高等学校">高等学校</option><option value="その他">その他</option>';
    w = w + '</select></p><p class="border"></p>';


    w = w + '<p class="contents">専攻&nbsp;<select name="major">';
    w = w + '<option value="">--</option><option value="法学・政策系">法学・政策系</option><option value="商学系">商学系</option><option value="社会・福祉系">社会・福祉系</option><option value="外国語系">外国語系</option><option value="文学系">文学系</option><option value="教員養成系">教員養成系</option><option value="教育系">教育系</option><option value="宗教・神学系">宗教・神学系</option><option value="医療・保険系">医療・保険系</option><option value="体育・芸術・音楽系">体育・芸術・音楽系</option><option value="数理物系">数理物系</option><option value="機械系">機械系</option><option value="電気・電子・制御系">電気・電子・制御系</option><option value="情報系">情報系</option><option value="応用物系">応用物系</option>';
    w = w + '<option value="土木系">土木系</option><option value="建築系">建築系</option><option value="生物系">生物系</option><option value="化学・物質系">化学・物質系</option><option value="その他理工系">その他理工系</option><option value="農業・農学系">農業・農学系</option><option value="水産系">水産系</option><option value="畜産・酪農系">畜産・酪農系</option><option value="薬学系">薬学系</option><option value="商船系">商船系</option><option value="医学・歯学系">医学・歯学系</option><option value="獣医系">獣医系</option><option value="衛生・医療・介護系">衛生・医療・介護系</option><option value="その他">その他</option>';
    w = w + '</select></p><p class="border"></p>';


    w = w + '<p class="contents"><label for="schoolname">学校名</label></p><input class="text" type="text" name="schoolname" id="schoolname" placeholder="○○大学">';
    w = w + '<p class="border"></>';

    w = w + '<p class="contents"><label for="facultylname">学部名</label></p><input class="text" type="text" name="facultyname" id="facultyname" placeholder="○○学部">';
    w = w + '<p class="border"></p>';

    w = w + '<p class="contents"><label for="departmentname">学科名</label></p><input class="text" type="text" name="depaetmentname" id="depaetmentname" placeholder="○○大学">';
    w = w + '<p class="border"></p>';

    w = w + '<p class="contents">入学年月日&nbsp;<input class="date" type="date" name="admissiondate"></p>';
    w = w + '<p class="border"></p>';

    w = w + '<p class="contents">卒業年月日&nbsp;<input class="date" type="date" name="graduatedate"></p>';
    w = w + '<p class="border"></p>';

    w = w + '<p class="contents">卒業区分&nbsp;<select name="category">';
    w = w + '<option value="">--</option><option value="卒業">卒業</option><option value="卒業見込み">卒業見込み</option><option value="中退">中退</option>';

    w = w + '</select></p></section></form><button type="button">学歴を追加する</button></article>';


    $("body").append("article").html(w);


};