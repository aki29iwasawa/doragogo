function skillyears(data) {

    changeCSS("../../mypage/skill/skillyears.css", 0);

    var w = '<article><h1>経験年数</h1>';
    w = w + '<li><button class="back" value="1">1年以上</button></li><li><button class="back">2年以上</button></li><li><button class="back">3年以上</button></li>';
    w = w + '<li><button class="back">4年以上</button></li><li><button class="back">5年以上</button></li><li><button class="back">6年以上</button></li>';
    w = w + '<li><button class="back">7年以上</button></li><li><button class="back">8年以上</button></li><li><button class="back">9年以上</button></li>';
    w = w + '<li><button class="back">10年以上</button></li><li><button class="back">11年以上</button></li><li><button class="back">12年以上</button></li>';
    w = w + '<li><button class="back">13年以上</button></li><li><button class="back">14年以上</button></li><li><button class="back">15年以上</button></li>';
    w = w + '<li><button class="back">16年以上</button></li><li><button class="back">17年以上</button></li><li><button class="back">18年以上</button></li>';
    w = w + '<li><button class="back">19年以上</button></li><li><button class="back">20年以上</button></li>';
    w = w + '</article>';

    $("body").append("article").html(w);

    $("button").on("click", function() {

        var i = $('button').index(this);
        var ret = $(".back")[i].textContent;

        var array = [];

        if (sessionStorage.getItem("skill02")) {
            array = sessionStorage.getItem("skill02").split(',');
            console.log(array);
        }

        array.push(ret);

        sessionStorage.setItem('skill02', array);

        console.log(ret);

        skill(data);

    });


}