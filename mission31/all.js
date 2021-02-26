let userName
// $(document).ready(function () {

// })

$('#searchUser').on('keypress', function (e) {
  // console.log(e.target.keyCode)
  if (e.which == 13) {
    $.ajax({
      url: `https://api.github.com/users/${userName}`,
      method: 'get',
      dataType: 'json',
      success: function (data) {
        console.log(data)
      },
    })
  }
})
