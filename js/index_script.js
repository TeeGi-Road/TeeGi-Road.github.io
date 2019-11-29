// 跑馬燈
$('.marquee').marquee({
    pauseOnHover: true,
});

// 滑鼠移入移出換圖
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