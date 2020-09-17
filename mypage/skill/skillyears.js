function skillyears(data) {

    changeCSS("../../mypage/skill/skillyears.css", 0);

    var w = '<article><h1>経験年数</h1>';
    w = w + '<li><button class="back" id="ka">1年以上</button></li><li><button class="back" id="ka">2年以上</button></li><li><button class="back" id="ka">3年以上</button></li>';
    w = w + '<li><button class="back" id="ka">4年以上</button></li><li><button class="back" id="ka">5年以上</button></li><li><button class="back" id="ka">6年以上</button></li>';
    w = w + '<li><button class="back" id="ka">7年以上</button></li><li><button class="back" id="ka">8年以上</button></li><li><button class="back" id="ka">9年以上</button></li>';
    w = w + '<li><button class="back" id="ka">10年以上</button></li><li><button class="back" id="ka">11年以上</button></li><li><button class="back" id="ka">12年以上</button></li>';
    w = w + '<li><button class="back" id="ka">13年以上</button></li><li><button class="back" id="ka">14年以上</button></li><li><button class="back" id="ka">15年以上</button></li>';
    w = w + '<li><button class="back" id="ka">16年以上</button></li><li><button class="back" id="ka">17年以上</button></li><li><button class="back" id="ka">18年以上</button></li>';
    w = w + '<li><button class="back" id="ka">19年以上</button></li><li><button class="back" id="ka">20年以上</button></li>';
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