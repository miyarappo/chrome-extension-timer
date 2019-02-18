'use strict';

const $min = document.querySelector('.min');
const $sec = document.querySelector('.sec');
const $startBtn = document.querySelector('.startBtn');
const $stopBtn = document.querySelector('.stopBtn');

var timer = null;
var amountTime = 0;

function countDown() {
  amountTime = amountTime - 1;
  $min.value = Math.floor(amountTime / 60);
  $sec.value = amountTime % 60;
  if (amountTime === 0) {
    alert('時間になりました！お疲れ様です！');
    $startBtn.disabled = false;
    $min.value = '0'
    $sec.value = '0'
    clearInterval(timer);
  }
}

function onClickStartButton() {
  if (!$min.value && !$sec.value) {
    alert('時間を入力してください！');
    return false;
  }
  if ($min.value && !$sec.value) {
    $sec.value = '0'
  }
  $startBtn.disabled = true;
  amountTime = Number($min.value) * 60 + Number($sec.value);
  timer = setInterval(countDown, 1000);
}

function onclickStopButton() {
  $startBtn.disabled = false;
  clearInterval(timer);
}

$startBtn.addEventListener('click', onClickStartButton);
$stopBtn.addEventListener('click', onclickStopButton)
