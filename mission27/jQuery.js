// 功能需求:
// 2. 進入頁面後時間開始倒數，若輸入正確倒數時間會增加
// 3. 時間內沒寫完會顯示時間到的訊息
// 4. 難度選單可以選擇隱藏或是顯示
// 5. 刷新頁面後難度不會被回復預設值
// 6. 依照難度設定相對應的時間
const text = document.querySelector("#text");
text.focus();

let time = 10;
const initTime = setInterval(updateTime, 1000);

function updateTime() {
  time--;
  $("#time").text(time + " s ");
  if (time === 0) {
    clearInterval(initTime);
    $("#end-game-container").html(`
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
    `);
    $("#end-game-container").css("display", "flex");
  }
}

function randomUser() {
  $.ajax({
    url: "https://randomuser.me/api/",
    method: "get",
    dataType: "json",
    success: function (res) {
      // console.log(res);
      // console.log(res.results[0].name.title);
      data = res.results[0].name.last;
      // console.log(data);
      $("#word").text(data);
    },
  });
  time--;
  $("#time").val(time);
}
randomUser();

// 辨識輸入的值有沒有跟顯示的值一樣，有得一分
let score = 0;
$("#text").on("input", function (e) {
  const textInput = $(this).val();
  // console.log(textInput);
  if (textInput === data) {
    randomUser();
    countTime();
    $("#text").val("");
    score++;
    $("#score").text(score);
  }
});
