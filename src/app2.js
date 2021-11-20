import $ from 'jquery'
import './app2.css'
let $li1 = $('#li1');
let $li2 = $('#li2');
let $content1 = $('.content1');
let $content2 = $('.content2');


$li1.on('click', function (e) {
    $li1.addClass('active').siblings().removeClass('active');
    $content1.css('display', 'block').siblings().css('display', 'none');
})

$li2.on('click', function (e) {
    $li2.addClass('active').siblings().removeClass('active');
    $content2.css('display', 'block').siblings().css('display', 'none');
})










