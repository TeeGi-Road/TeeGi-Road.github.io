// card hover
let slides = document.getElementById('slides');
let slideChildren = slides.children;

function hoverSlide(index) {
	index in slideChildren &&
		slideChildren[index].classList.add('hover');
}

function unhoverSlide(index) {
	index in slideChildren &&
		slideChildren[index].classList.remove('hover');
}

// 改變瀏覽器寬度時 add/remove class
function mq() {
    var query = Modernizr.mq('(max-width: 1199.98px)');
    if (query) {
        $('#holder').html('true');
        // JavaScript here
        // 當CSS media query計算的視窗寬度小於 px時執行
        $('.navbar .container div').addClass('dropdown-menu');
        $('.navbar .container div ul').addClass('dropdown-item');
    } else {
        $('#holder').html('false');
        // JavaScript here
        // 當CSS media query計算的視窗寬度大於等於 px時執行
        $('.navbar .container div').removeClass('dropdown-menu');
        $('.navbar .container div ul').removeClass('dropdown-item');
    }
};

$(window).resize(function () {
    mq();
});
mq();