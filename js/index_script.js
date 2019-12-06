// 跑馬燈
// $(document).ready(function () {
//     $('.marquee').marquee({
//         pauseOnHover: true,
//     });
// });


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
function mq() {
    var query = Modernizr.mq('(max-width: 1199.98px)');
    if (query) {
        $('#holder').html('true');
        // JavaScript here
        // 當CSS media query計算的視窗寬度小於 px時執行
        $('.navbar .container div').addClass('dropdown-menu');
        $('.navbar .container div ul').addClass('dropdown-item');

        // 手機版12欄位btn
        document.querySelector('.index2').innerHTML = `
        <div class="row">
            <div class="col-6">
                <a href="./Neiw.html"><img src="./img/index/index-btn-Neiw-mobi.jpg" alt="前進內灣線"></a>
            </div>
            <div class="col-6">
                <a href="./Liuj.html"><img src="./img/index/index-btn-Liuj-mobi.jpg" alt="前進六家線"></a>
            </div>
            <div class="col-6">
                <a href="./Jiji.html"><img src="./img/index/index-btn-Jiji-mobi.jpg" alt="前進集集線"></a>
            </div>
            <div class="col-6">
                <a href="./Shal.html"><img src="./img/index/index-btn-Shal-mobi.jpg" alt="前進沙崙線"></a>
            </div>
            <div class="col-6">
                <a href="./Shen.html"><img src="./img/index/index-btn-Shen-mobi.jpg" alt="前進深澳線"></a>
            </div>
            <div class="col-6">
                <a href="./Ping.html"><img src="./img/index/index-btn-Ping-mobi.jpg" alt="前進平溪線"></a>
            </div>
        </div>`;
    } else {
        $('#holder').html('false');
        // JavaScript here
        // 當CSS media query計算的視窗寬度大於等於 px時執行
        $('.navbar .container div').removeClass('dropdown-menu');
        $('.navbar .container div ul').removeClass('dropdown-item');

        // 網頁版2欄位btn
        document.querySelector('.index2').innerHTML = `
        <div class="row">
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

function mq2() {
    var query2 = Modernizr.mq('(max-width:767.98px)');
    if (query2) {
        $('#holder').html('true');
        // JavaScript here
        // 當CSS media query計算的視窗寬度小於769px時執行
        document.querySelector('.index2').innerHTML = `
        <div class="row">
            <div class="col-sm-12">
                <a href="./Neiw.html"><img src="./img/index/index-btn-Neiw-mobi.jpg" alt="前進內灣線"></a>
            </div>
            <div class="col-sm-12">
                <a href="./Liuj.html"><img src="./img/index/index-btn-Liuj-mobi.jpg" alt="前進六家線"></a>
            </div>
            <div class="col-sm-12">
                <a href="./Jiji.html"><img src="./img/index/index-btn-Jiji-mobi.jpg" alt="前進集集線"></a>
            </div>
            <div class="col-sm-12">
                <a href="./Shal.html"><img src="./img/index/index-btn-Shal-mobi.jpg" alt="前進沙崙線"></a>
            </div>
            <div class="col-sm-12">
                <a href="./Shen.html"><img src="./img/index/index-btn-Shen-mobi.jpg" alt="前進深澳線"></a>
            </div>
            <div class="col-sm-12">
                <a href="./Ping.html"><img src="./img/index/index-btn-Ping-mobi.jpg" alt="前進平溪線"></a>
            </div>
        </div>`;
    } else {
        $('#holder').html('false');
        // JavaScript here
        // 當CSS media query計算的視窗寬度大於等於 px時執行
    }
};


$(window).resize(function () {
    mq();
    mq2();
});
mq();
mq2();