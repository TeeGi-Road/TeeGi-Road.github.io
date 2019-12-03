// 點擊下滑navbar
$(document).ready(function () {
    $('.nav2 li').click(function () {
        if ($('.nav1')[0].style.display === 'block') {
            $('.nav1').hide(3000);
        } else {
            $('.nav1').show(3000);
        }
    });
});


// 跑馬燈
$(document).ready(function () {
    $('.marquee').marquee({
        pauseOnHover: true,
    });
});


// 滑鼠移入移出換圖
$(document).ready(function () {
    $('.index2 img').mouseenter(function () {
        // 滑鼠移入後, 取得原始src字串
        // 用'.'split成3段
        // 加上'h.'後set新src給img
        var imgsrc = $(this).attr('src');
        var imgsrcSplit = imgsrc.split('.');
        $(this).attr('src', "." + imgsrcSplit[1] + "h." + imgsrcSplit[2]);

        // 滑鼠移出後, set原始src給img
        $(this).mouseleave(function () {
            $(this).attr('src', imgsrc);
        });
    });
});


// 改變瀏覽器寬度時 add/remove class
function windowSize() {
    if ($(window).width() < 1200) {
        $('.nav2').hide();
        $('.nav1').show();
        $('.nav1 .container button').attr('data-toggle', 'dropdown');
        $('.nav1 .container button').attr('aria-haspopup', 'true');
        $('.nav1 .container button').attr('data-target', '');
        $('.nav1 .container button').attr('aria-controls', '');
        $('.nav1 .container button').attr('aria-label', '');
        $('.nav1 .container div').addClass('dropdown-menu');
        $('.nav1 .container div ul').addClass('dropdown-item');

        $('.index1 .row:nth-child(1) .col-6').addClass('col');
        $('.index1 .row:nth-child(1) .col-6').removeClass('col-6');
        $('.index1 .row:nth-child(2) .col-8').addClass('col');
        $('.index1 .row:nth-child(2) .col-8').removeClass('col-8');
        $('.index1 .row:nth-child(3) .col-2').removeClass('col-2');
        $('.index1 .row:nth-child(3) .col-9').removeClass('col-9');
    } else {
        $('.nav2').show();
        $('.nav1').hide();
        $('.nav1 .container button').attr('data-toggle', 'collapse');
        $('.nav1 .container button').attr('aria-haspopup', '');
        $('.nav1 .container button').attr('data-target', '#navbarSupportedContent');
        $('.nav1 .container button').attr('aria-controls', 'navbarSupportedContent');
        $('.nav1 .container button').attr('aria-label', 'Toggle navigation');
        $('.nav1 .container div').removeClass('dropdown-menu');
        $('.nav1 .container div ul').removeClass('dropdown-item');

        $('.index1 .row:nth-child(1) .col').addClass('col-6');
        $('.index1 .row:nth-child(1) .col').removeClass('col');
        $('.index1 .row:nth-child(2) .col').addClass('col-8');
        $('.index1 .row:nth-child(2) .col').removeClass('col');
        $('.index1 .row:nth-child(3) div:nth-child(1)').addClass('col-2');
        $('.index1 .row:nth-child(3) div:nth-child(2)').addClass('col-9');
    }
};
$(window).resize(function () {
    windowSize();
});
windowSize();