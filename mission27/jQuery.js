// 功能需求:
// 4. 難度選單可以選擇隱藏或是顯示
// 5. 刷新頁面後難度不會被回復預設值
// 6. 依照難度設定相對應的時間

$("#text").focus();

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

$("#difficulty").change(function () {
  difficulty = $("#difficulty").val();
  console.log(difficulty);
  localStorage.setItem("difficulty", difficulty);
});
