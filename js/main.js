var profiledata = [
    {
        name: '浅沼 昂太',
        img : 'asanuma.png',
        exptext : 'チーム代表'
    },
    {
        name: '長谷川 朝',
        img : 'hasegawa.png',
        exptext : 'チーム副代表'
    },
    {
        name: '橋本 直希',
        img : 'none.jpg',
        exptext : 'ソフトウェア担当'
    },
    {
        name: '中野 紗良',
        img : 'none.jpg',
        exptext : 'ハード担当'
    },
    {
        name: '武田 聖志',
        img : 'none.jpg',
        exptext : 'ハード担当'
    },
    {
        name: '大柴 宗太郎',
        img : 'none.jpg',
        exptext : 'ハード担当'
    },
    {
        name: '宮本 哲晟',
        img : 'none.jpg',
        exptext : 'ハード担当'
    },
    {
        name: '杉崎 喜一',
        img : 'sugizaki.png',
        exptext : 'ハード担当'
    },
    {
        name: 'ギブソン 平',
        img : 'none.jpg',
        exptext : 'ソフトウェア担当'
    },
    {
        name: '山口 俊太郎',
        img : 'none.jpg',
        exptext : 'ソフトウェア担当'
    },
    {
        name: '鳥見 晃平',
        img : 'none.jpg',
        exptext : '電気回路担当'
    },
    {
        name: '尾嶋 雄貴',
        img : 'none.jpg',
        exptext : 'ハード担当'
    },
    {
        name: '吉田 拓人',
        img : 'none.jpg',
        exptext : 'ソフトウェア担当'
    },
    {
        name: '福田 怜和',
        img : 'fukuda.jpg',
        exptext : '電気回路担当'
    }
];

var timelinedata = [
    {
        date : '15.07.28',
        title : 'ホームページ更新',
        text : '新年度のチームに更新しました'
    }
];
$(function () {
    var html = $('#profileTemp').render(profiledata);
    $('#profile').append(html);
    var html = $('#timelineHeadTemp').render(timelinedata);
    $('#dates').append(html);
    var html = $('#timelineissuesTemp').render(timelinedata);
    $('#issues').append(html);
    $('a[href^=#]').click(function () {
        var speed = 500; //移動完了までの時間(sec)を指定
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("body").animate({
            scrollTop: position - 50
        }, speed, "swing");
        $('#navbutton').collapse('hide');
        return false;
    });
    $().timelinr({
            arrowKeys: 'true'
    });
});