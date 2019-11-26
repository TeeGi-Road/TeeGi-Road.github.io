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

// 天氣
fetch(
        'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D'
    )
    .then(function (response) {
        return response.json();
    })
    .then(function (weatherData) {
        // 先將取得的資料, 定位至欲處理的筆數上
        var locations = weatherData.records.location;
        var cards = document.querySelector('.weatherCards');
        // foreach處理, 並定義各參數的資料來源(定位)
        locations.forEach(location => {
            var locationName = location.locationName;
            var stime = location.weatherElement[0].time[0].startTime.substr(5, 11);
            // var etime = location.weatherElement[0].time[0].endTime.substr(11, 5);
            var etime = location.weatherElement[0].time[0].endTime.substr(5, 11);
            var Wx = location.weatherElement[0].time[0].parameter.parameterName;
            var WxCode = location.weatherElement[0].time[0].parameter.parameterValue;
            var WxImg;
            var PoP = location.weatherElement[1].time[0].parameter.parameterName;
            var MinT = location.weatherElement[2].time[0].parameter.parameterName;
            var CI = location.weatherElement[3].time[0].parameter.parameterName;
            var MaxT = location.weatherElement[4].time[0].parameter.parameterName;
            // 判斷天氣型態code, 轉換成圖示
            switch (WxCode) {
                case '1':
                    WxImg = '../02-素材/iconfinder_sun_2995005.png'
                    break;
                case '2':
                case '3':
                    WxImg = '../02-素材/iconfinder_cloudy_2995001.png'
                    break;
                case '4':
                case '5':
                case '6':
                case '7':
                    WxImg = '../02-素材/iconfinder_cloud_2995000.png'
                    break;
                case '8':
                case '9':
                case '10':
                    WxImg = '../02-素材/iconfinder_rain-cloud_2995003.png'
                    break;
                case '11':
                    WxImg = '../02-素材/iconfinder_rain_2995004.png'
                    break;
                default:
                    WxImg = '../02-素材/iconfinder_sun_2995005.png';
                    break;
            }
            // 將上述參數放入卡片innerHTML
            // 溫度C = &#8451
            cards.innerHTML += `
        <div class="card">
            <div class="grid item1">
                <div class="city">${locationName}</div>
                <div class="datetime">${stime} ~ ${etime}</div>
            </div>
            <div class="grid item2">
                <img class="wx-icon" src="${WxImg}" alt="">
                <div class="sun">${Wx}</div>

            </div>
            <div class="grid item2">
                <div class="minC-maxC">${MinT}&#8451 - ${MaxT}&#8451</div>
                <div class="rain">降雨機率 ${PoP}%</div>
                <div class="memo">${CI}</div>
            </div>
        </div>
        `;

            console.log(location.weatherElement[0].time[1].parameter.parameterValue);
        });

    });

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

    $('.localtime')[0].innerHTML = hour + ' ' + min;
}
window.onload = function () {
    setInterval(showTime, 1000);
}