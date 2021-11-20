import $ from 'jquery'
import './app1.css'
//获取span标签以及文本
let $span = $('#app1>span');
let n = parseInt(localStorage.getItem('number', n));
//渲染数字
$span.text(n||100 );

//获取按钮
let $button1 = $('#add');
let $button2 = $('#minus');
let $button3 = $('#division');
let $button4 = $('#multiply');

$button1.on('click', () => {
    n += 1;
    localStorage.setItem('number', n);
    $span.text(n);
})

$button2.on('click', () => {
    n -= 1;
    localStorage.setItem('number', n);
    $span.text(n);
})

$button3.on('click', () => {
    n *= 2;
    localStorage.setItem('number', n);
    $span.text(n);
})

$button4.on('click', () => {
    n /= 2;
    localStorage.setItem('number', n);
    $span.text(n);
})