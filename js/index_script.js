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
    if ($(window).width() < 768) {
        $('.index2').innerHTML += `
        可馨要改的平板板HTML格式`;
    } else if ($(window).width() < 1200) {
        // navbar
        $('.navbar .container button').attr('data-toggle', 'dropdown');
        $('.navbar .container button').attr('aria-haspopup', 'true');
        $('.navbar .container button').attr('data-target', '');
        $('.navbar .container button').attr('aria-controls', '');
        $('.navbar .container button').attr('aria-label', '');
        $('.navbar .container div').addClass('dropdown-menu');
        $('.navbar .container div ul').addClass('dropdown-item');
        // container
        $('.index1 .row:nth-child(1) .col-6').addClass('col');
        $('.index1 .row:nth-child(1) .col-6').removeClass('col-6');
        $('.index1 .row:nth-child(2) .col-8').addClass('col');
        $('.index1 .row:nth-child(2) .col-8').removeClass('col-8');
        $('.index1 .row:nth-child(3) .col-2').removeClass('col-2');
        $('.index1 .row:nth-child(3) .col-9').removeClass('col-9');
        $('.index2').innerHTML += `
        可馨要改的手機板HTML格式`;
    } else {
        // navbar
        $('.navbar .container button').attr('data-toggle', 'collapse');
        $('.navbar .container button').attr('aria-haspopup', '');
        $('.navbar .container button').attr('data-target', '#navbarSupportedContent');
        $('.navbar .container button').attr('aria-controls', 'navbarSupportedContent');
        $('.navbar .container button').attr('aria-label', 'Toggle navigation');
        $('.navbar .container div').removeClass('dropdown-menu');
        $('.navbar .container div ul').removeClass('dropdown-item');
        // container
        $('.index1 .row:nth-child(1) .col').addClass('col-6');
        $('.index1 .row:nth-child(1) .col').removeClass('col');
        $('.index1 .row:nth-child(2) .col').addClass('col-8');
        $('.index1 .row:nth-child(2) .col').removeClass('col');
        $('.index1 .row:nth-child(3)>div:nth-child(1)').addClass('col-2');
        $('.index1 .row:nth-child(3)>div:nth-child(2)').addClass('col-9');
        $('.index2').innerHTML = `                <div class="row">
        <div class="col-2">
            <a href="./Neiw.html"><img src="./img/index/index-btn-Neiw.png" alt="前進內灣線"></a>
        </div>
        <div class="col-2">
            <a href="./Liuj.html"><img src="./img/index/index-btn-Liuj.png" alt="前進六家線"></a>
        </div>
        <div class="col-2">
            <a href="./Jiji.html"><img src="./img/index/index-btn-Jiji.png" alt="前進集集線"></a>
        </div>
        <div class="col-2">
            <a href="./Shal.html"><img src="./img/index/index-btn-Shal.png" alt="前進沙崙線"></a>
        </div>
        <div class="col-2">
            <a href="./Shen.html"><img src="./img/index/index-btn-Shen.png" alt="前進深澳線"></a>
        </div>
        <div class="col-2">
            <a href="./Ping.html"><img src="./img/index/index-btn-Ping.png" alt="前進平溪線"></a></div>
    </div>`;
    }
};
$(window).resize(function () {
    windowSize();
});
windowSize();