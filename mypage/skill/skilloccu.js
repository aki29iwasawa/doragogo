function skilloccu(data) {

    changeCSS("../../mypage/skill/skilloccu.css", 0);

    var w = '<article><section class="main"><h1>経験職種を選択</h1>';
    w = w + '<section><h2>営業</h2><div>';
    w = w + '<p><li>企画営業・法人営業・個人営業・MR・その他営業関連</li><button class="skill-years">＞</button></p><p><li>テレマーケティング・コールセンター</li><button class="skill-years">＞</button></p><p><li>キャリアカウンセラー・人材コーディネーター</li><button class="skill-years">＞</button></p></div>';
    w = w + '</section><p class="border"></p>';

    w = w + '<section><h2>事務・管理</h2><div>';
    w = w + '<p><li>一般事務・アシスタント・受付・秘書・その他事務関連</li><button class="skill-years">＞</button></p><p><li>財務・会計・経理</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>総務・人事・法務・知財・広報・IR</li><button class="skill-years">＞</button></p><p><li>物流・資材購買・貿易</li><button class="skill-years">＞</button></p>';
    w = w + '</div></section><p class="border"></p>';

    w = w + '<section><h2>企画・マーケティング・経営・管理職</h2><div>';
    w = w + '<p><li>商品企画・営業企画・マーケティング・宣伝 経営企画・事業統括・新規事業開発</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>管理職・エグゼクティブ MD・バイヤー・店舗開発・FCオーナー</li><button class="skill-years">＞</button></p>';
    w = w + '</div></section><p class="border"></p>';

    w = w + '<section><h2>サービス・販売・外食</h2><div>';
    w = w + '<p><li>小売・流通・外食・アミューズメント</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>美容・エステ・リラクゼーション関連</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>旅行・ホテル・航空・ブライダル・葬祭</li><button class="skill-years">＞</button></p>';
    w = w + '</div></section><p class="border"></p>';

    w = w + '<section><h2>Weｂ・インターネット・ゲーム</h2><div>';
    w = w + '<p><li>Weｂサイト・インターネットサービス</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>ゲーム・マルチメディア関連</li><button class="skill-years">＞</button></p>';
    w = w + '</div></section><p class="border"></p>';

    w = w + '<section><h2>クリエイティブ（メディア・アパレル・デザイン）</h2><div>';
    w = w + '<p><li>広告・グラフィック関連</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>出版・印刷関連</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>映像・音響・イベント・芸能・テレビ・放送関連</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>ファッション・インテリア・空間・プロダクトデザイン</li><button class="skill-years">＞</button></p>';
    w = w + '</div></section><p class="border"></p>';

    w = w + '<section><h2>専門職（コンサルタント・士業・金融・不動産）</h2><div>';
    w = w + '<p><li>ビジネスコンサルタント・シンクタンク</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>士業・専門コンサルタント</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>金融系専門職</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>不動産・プロパティマネジメント系専門職</li><button class="skill-years">＞</button></p>';
    w = w + '</div></section><p class="border"></p>';

    w = w + '<section><h2>ITエンジニア（システム開発・SE・インフラ）</h2><div>';
    w = w + '<p><li>システムコンサルタント・システムアナリスト・プリセールス</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>システム開発（Web・オープン・モバイル系）</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>システム開発（汎用機系）</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>システム開発（組み込み・ファームウェア・制御系）</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>パッケージソフト・ミドルウェア開発</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>ネットワーク・サーバ設計・構築（LAN・WAN・Web系）</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>通信インフラ設計・構築（キャリア・ISP系）</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>運用・保守・監視・テクニカルサポート</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>社内SE・情報システム</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>研究・特許・テクニカルマーケティング</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>品質管理</li><button class="skill-years">＞</button></p>';
    w = w + '</div></section><p class="border"></p>';

    w = w + '<section><h2>エンジニア（機械・電気・電子・半導体・制御）</h2><div>';
    w = w + '<p><li>回路・システム設計</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>半導体設計 制御設計</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>機械・機構設計・金型設計</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>光学技術・光学設計</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>生産技術・プロセス開発</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>品質管理・製品評価・品質保証・生産管理・製造管理</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>セールスエンジニア・フィールドアプリケーションエンジニア（FAE)</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>サービスエンジニア・サポートエンジニア</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>研究・特許・テクニカルマーケティング</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>評価・検査・実験</li><button class="skill-years">＞</button></p>';
    w = w + '</div></section><p class="border"></p>';

    w = w + '<section><h2>素材・化学・食品・医薬品技術職</h2><div>';
    w = w + '<p><li>素材・化学・食品・医薬品技術職</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>化粧品・食品・香料関連</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>医薬品関連</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>医療用具関連</li><button class="skill-years">＞</button></p>';
    w = w + '</div></section><p class="border"></p>';

    w = w + '<section><h2>建築・土木技術職</h2><div>';
    w = w + '<p><li>プランニング・測量・設計・積算</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>施工管理・設備・環境保全</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>研究開発・技術開発・構造解析・特許</li><button class="skill-years">＞</button></p>';
    w = w + '</div></section><p class="border"></p>';

    w = w + '<section><h2>技能工・設備・交通・運輸</h2><div>';
    w = w + '<p><li>技能工（整備・工場生産・製造・工事）</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>運輸・配送・倉庫関連 交通（鉄道・バス）関連</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>警備・清掃・設備管理関連・その他</li><button class="skill-years">＞</button></p>';
    w = w + '</div></section><p class="border"></p>';

    w = w + '<section><h2>医療・福祉・介護</h2><div>';
    w = w + '<p><li>医療サービス関連</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>福祉・介護サービス・栄養</li><button class="skill-years">＞</button></p>';
    w = w + '</div></section><p class="border"></p>';

    w = w + '<section><h2>教育・保育・公務員・農林水産・その他</h2><div>';
    w = w + '<p><li>教育・保育・インストラクター・通訳・翻訳</li><button class="skill-years">＞</button></p>';
    w = w + '<p><li>公務員・団体職員 農林水産関連職 その他職種</li><button class="skill-years">＞</button></p>';
    w = w + '</div></section></section></article>';

    $("body").append("article").html(w);

    $("button").on("click", function() {

        var i = $('button').index(this);
        var ret = $("li")[i].textContent;

        var array = [];

        if (sessionStorage.getItem("skill01")) {
            array = sessionStorage.getItem("skill01").split(',');
            console.log(array);
        }

        array.push(ret);

        sessionStorage.setItem('skill01', array);

        console.log(ret);

        skillyears(data);

    });


}