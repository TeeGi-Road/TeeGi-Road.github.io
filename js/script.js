// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 390,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 取得目前page路徑
var pageUrl = document.location.pathname;

// 臺灣各縣市鄉鎮未來3天(72小時)逐3小時天氣預報 + 跑馬燈
// 判斷pageUrl是否包含支線名稱, 是則帶入api網址取得json資料
if (pageUrl.indexOf('Neiw') !== -1) {
    // 內灣 新竹縣橫山鄉
    setMarqueeUrl('./img/main/mq/NeiwMq.png', '內灣線');
    getWeatherData('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-009?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D&locationName=%E6%A9%AB%E5%B1%B1%E9%84%89&elementName=Wx');
} else if (pageUrl.indexOf('Liuj') !== -1) {
    // 六家 新竹縣竹北市
    setMarqueeUrl('./img/main/mq/LiujMq.png', '六家線');
    getWeatherData('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-009?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D&locationName=%E7%AB%B9%E5%8C%97%E5%B8%82&elementName=Wx');
} else if (pageUrl.indexOf('Jiji') !== -1) {
    // 集集 南投縣集集鎮
    setMarqueeUrl('./img/main/mq/JijiMq.png', '集集線');
    getWeatherData('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-021?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D&locationName=%E9%9B%86%E9%9B%86%E9%8E%AE&elementName=Wx');
} else if (pageUrl.indexOf('Shal') !== -1) {
    // 沙崙 臺南市歸仁區
    setMarqueeUrl('./img/main/mq/ShalMq.png', '沙崙線');
    getWeatherData('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-077?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D&locationName=%E6%AD%B8%E4%BB%81%E5%8D%80&elementName=Wx');
} else if (pageUrl.indexOf('Shen') !== -1) {
    // 深澳 新北市瑞芳區深澳里
    setMarqueeUrl('./img/main/mq/ShenMq.png', '深澳線');
    getWeatherData('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-069?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D&locationName=%E7%91%9E%E8%8A%B3%E5%8D%80&elementName=Wx');
} else if (pageUrl.indexOf('Ping') !== -1) {
    // 平溪 新北市平溪區
    setMarqueeUrl('./img/main/mq/PingMq.png', '平溪線');
    getWeatherData('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-069?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D&locationName=%E5%B9%B3%E6%BA%AA%E5%8D%80&elementName=Wx');
} else {}

function getWeatherData(fetchUrl) {
    fetch(
            fetchUrl
        )
        .then(function (response) {
            return response.json();
        })
        .then(function (weatherData) {
            // 取得html class
            var weatherIcon = document.querySelector('.localweather');

            // 縣市鄉鎮名稱
            var CityName = weatherData.records.locations[0].locationsName;
            var TownName = weatherData.records.locations[0].location[0].locationName;
            // console.log("縣市鄉鎮: " + CityName, TownName);

            // 取指定時間time[]的天氣現象value
            // var locationTimes = weatherData.records.locations[0].location[0].weatherElement[0].time;
            var Wx = weatherData.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value;
            var WxCode = weatherData.records.locations[0].location[0].weatherElement[0].time[0].elementValue[1].value;
            var WxImg;
            // 判斷天氣現象value, 轉換成圖示
            switch (WxCode) {
                case '01':
                case '24':
                    WxImg = '../img/main/weather/clear.png';
                    break;
                case '02':
                case '03':
                case '25':
                case '26':
                    WxImg = '../img/main/weather/mostClear.png';
                    break;
                case '04':
                case '05':
                case '06':
                case '07':
                case '27':
                case '28':
                    WxImg = '../img/main/weather/cloudy.png';
                    break;
                case '08':
                case '11':
                case '18':
                case '19':
                case '20':
                case '21':
                case '30':
                case '34':
                    WxImg = '../img/main/weather/mostClear-rainy.png';
                    break;
                case '09':
                case '10':
                case '14':
                case '22':
                    WxImg = '../img/main/weather/afternoonRain.png';
                    break;
                case '12':
                case '13':
                case '29':
                case '31':
                case '32':
                case '38':
                case '39':
                    WxImg = '../img/main/weather/rainy.png';
                    break;
                case '15':
                case '16':
                case '17':
                case '33':
                case '35':
                case '36':
                case '41':
                    WxImg = '../img/main/weather/thund.png';
                    break;
                case '23':
                case '37':
                case '42':
                    WxImg = '../img/main/weather/snow.png';
                    break;
                default:
                    WxImg = '../img/main/weather/clear.png';
                    break;
            }

            // 將上述參數放入div innerHTML
            weatherIcon.innerHTML += `<img src="${WxImg}" alt="${CityName} ${TownName} ${Wx}">`;
        });
}

function setMarqueeUrl(imgurl, name) {
    var marquee = document.querySelector('.marquee');
    marquee.innerHTML += `<img src="${imgurl}" alt="${name} 跑馬燈文字 起點站 開往 終點站 經由 停靠站">`;
}
// 跑馬燈
function showMarquee() {
    $('.marquee').marquee({
        pauseOnHover: true,
    });
}

// 時間
function showTime() {
    var today = new Date();
    var hour =
        parseInt(today.getHours()) < 10 ?
        '0' + today.getHours() :
        today.getHours();

    var min =
        parseInt(today.getMinutes()) < 10 ?
        '0' + today.getMinutes() :
        today.getMinutes();

    $('.localtime')[0].innerHTML = `<p class="my-0">${hour} ${min}</p>`;
}
window.onload = function () {
    setInterval(showTime, 1000);
    showMarquee();
}

// 滑鼠移入移出換圖
$(document).ready(function () {
    $('.img-main-btn img').mouseenter(function () {
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
        $('.navbar .container button').attr('data-toggle', 'dropdown');
        $('.navbar .container button').attr('aria-haspopup', 'true');
        $('.navbar .container button').attr('data-target', '');
        $('.navbar .container button').attr('aria-controls', '');
        $('.navbar .container button').attr('aria-label', '');
        $('.navbar .container div').addClass('dropdown-menu');
        $('.navbar .container div ul').addClass('dropdown-item');

    } else {
        $('.navbar .container button').attr('data-toggle', 'collapse');
        $('.navbar .container button').attr('aria-haspopup', '');
        $('.navbar .container button').attr('data-target', '#navbarSupportedContent');
        $('.navbar .container button').attr('aria-controls', 'navbarSupportedContent');
        $('.navbar .container button').attr('aria-label', 'Toggle navigation');
        $('.navbar .container div').removeClass('dropdown-menu');
        $('.navbar .container div ul').removeClass('dropdown-item');
    }
};
$(window).resize(function () {
    windowSize();
});
windowSize();