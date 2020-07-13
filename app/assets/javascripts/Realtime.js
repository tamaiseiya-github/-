// バージョン１
function showClock1() {
  var nowTime = new Date();
  var year = nowTime.getFullYear(); // 年
  var month = nowTime.getMonth() + 1; // 月
  var day = nowTime.getDate(); // 日
  var nowHour = nowTime.getHours();
  var nowMin = nowTime.getMinutes();
  var nowSec = nowTime.getSeconds();
  var dayOfWeek = nowTime.getDay(); // 曜日(数値)
  var dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek]; // 曜日(日本語表記)
  var msg =
    "現在、 " +
    year +
    "年" +
    month +
    "月" +
    day +
    "日" +
    // dayOfWeek +
    "(" +
    dayOfWeekStr +
    ")" +
    "時刻は" +
    nowHour +
    ":" +
    nowMin +
    ":" +
    nowSec +
    " です。";
  document.getElementById("RealtimeClockArea1").innerHTML = msg;
}
setInterval("showClock1()", 1000);

// バージョン２
function set2fig(num) {
  // 桁数が1桁だったら先頭に0を加えて2桁に調整する
  var ret;
  if (num < 10) {
    ret = "0" + num;
  } else {
    ret = num;
  }
  return ret;
}

function showClock2() {
  var nowTime = new Date();
  var nowHour = set2fig(nowTime.getHours());
  var nowMin = set2fig(nowTime.getMinutes());
  var nowSec = set2fig(nowTime.getSeconds());
  var msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
  document.getElementById("RealtimeClockArea2").innerHTML = msg;
}
setInterval("showClock2()", 1000);

// バージョン３
function showClock3() {
  var nowTime = new Date();
  var nowHour = set2fig(nowTime.toUTCString());
  // var nowMin = set2fig(nowTime.getMinutes());
  // var nowSec = set2fig(nowTime.getSeconds());
  var msg = "現在" + nowHour + " です。";
  document.getElementById("RealtimeClockArea3").innerHTML = msg;
}
setInterval("showClock3()", 1000);
