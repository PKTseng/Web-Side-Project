$("#text").focus();

let time = 20;
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
    url: "https://random-word-api.herokuapp.com/word?number=1",
    method: "get",
    dataType: "json",
    success: function (res) {
      // console.log(res);
      data = res[0];
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
    updateTime();
    $("#text").val("");
    score++;
    $("#score").text(score);
    if (difficulty === "hard") {
      time += 10;
    } else if (difficulty === "medium") {
      time += 15;
    } else {
      time += 20;
    }
  }
});

$("#difficulty").change(function () {
  difficulty = $("#difficulty").val();
  console.log(difficulty);
  localStorage.setItem("difficulty", difficulty);
  location.reload();
});

$("#difficulty").val(
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium"
);
