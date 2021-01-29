// 功能需求:
// 2. 進入頁面後時間開始倒數，若輸入正確倒數時間會增加
// 3. 時間內沒寫完會顯示時間到的訊息
// 4. 難度選單可以選擇隱藏或是顯示
// 5. 刷新頁面後難度不會被回復預設值
// 6. 依照難度設定相對應的時間

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
  console.log(time);
  $("#time").val(time);
}
randomUser();
