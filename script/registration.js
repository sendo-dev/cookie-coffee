//　「登録」押下時、cookieにJSON形式でデータを保持するようにしたい（DB作るのめんどくさい…）
const cookieDelete = '="";max-age=0';
// document.cookie = 'sanshutukoku' + cookieDelete; // exe.
const cookieLongTarmExist = ';expires=2022/02/28';
// document.cookie = 'store=AMP' + cookieLongTarmExist; // exe.


/**
 * 登録押下時
 * 　入力中のデータをキャッシュへ追加
 */
document.getElementById("registrationBtn").onclick = function() {

  const logObject = {
    date: document.getElementById("date").value,
    store: document.getElementById("store").value,
    country: document.getElementById("country").value,
    gram: document.getElementById("gram").value
  }
  let arrLogObjects = [];
  arrLogObjects = getLogList(arrLogObjects);
  arrLogObjects.push(logObject);

  document.cookie = 'coffeeLogData=' + JSON.stringify(arrLogObjects) + cookieLongTarmExist;

};

/**
 * テーブル作成押下時
 * 　キャッシュから登録されているデータを取得し、それをもとにテーブルを作成
 */
document.getElementById("createBtn").onclick = function() {
  let arrLogObjects = [];
  arrLogObjects = getLogList(arrLogObjects);






  
};

/**
 * アラート押下時
 * 　キャッシュから登録されているデータを取得し確認する
 */
document.getElementById("alertBtn").onclick = function() {
  alert(readCookie('coffeeLogData') || "未登録");
};

/**
 * 全削除押下時
 * 　キャッシュに登録されているデータを削除
 */
document.getElementById("deleteBtn").onclick = function() {
  if (window.confirm('全データを削除しますか？')) {
    deleteCookie('coffeeLogData');
  }
};

/**
 * クリア押下時
 * 　フィールドクリア
 */
 document.getElementById("clearBtn").onclick = function() {
  if (window.confirm('フィールドを初期化しますか？')) {
    clear();
  }
};

/**
 * 　Cookieよりログデータを取得し、パースしたリストを返す
 */
 function getLogList(arrLogObjects) {
  const tmp = readCookie('coffeeLogData');
  //　データがまだない場合はパースしない
  if (tmp) {
    arrLogObjects = JSON.parse(tmp);
  }
  return arrLogObjects;
};

/**
 * 　Cookieより、引数で受け取ったキーに紐づくバリューを返す
 */
function readCookie(argKey) {
  const cookies = document.cookie.split("; ");
  cookies.forEach(function(elem, index) {
      console.log(index + ': ' + elem);
  });
  cookies.forEach(elem => console.log(elem));

  for (var i = 0; i < cookies.length; i++) {  
    const keyValue = cookies[i].split("="); // "="で分割して名前と値に分割する
    if (argKey == keyValue[0]) {
      return keyValue[1];
    }
  };
};

/**
 * 　Cookieより、引数で受け取ったキーに紐づくキーバリューを削除する
 */
function deleteCookie(argKey) {
  document.cookie = argKey + cookieDelete;
};

/**
 * 　フィールドクリア
 */
 function clear() {
  document.getElementById("date").value = "";
  document.getElementById("store").value = "";
  document.getElementById("country").value = "";
  document.getElementById("gram").value = "";
};

/**
 * 　引数で受け取ったデータをもとにデーブルを作成する
 */
function createLogTable(argArr) {

};
