$(document).ready(function () {
  $('#searchUser').on('keyup', function (e) {
    let username = e.target.value
    $.ajax({
      url: 'https://api.github.com/users/' + username,
      data: {
        client_id: 'b9315bcd5a07fcd759d8',
        client_secret: 'a2b698bf7e7c02f898197cf136d1a41f704ca8e4',
      },
      success: function insertProfile(user) {
        let obj = {}
        obj.avatar_url = user.avatar_url || 'no data'
        obj.profile_url = user.html_url || 'no data'
        obj.public_gists = user.public_gists || 'no data'
        obj.public_repos = user.public_repos || 'no data'
        obj.followers = user.followers || 'no data'
        obj.following = user.following || 'no data'
        obj.company = user.company || 'no data'
        obj.location = user.location || 'no data'
        obj.blog = user.blog || 'no data'
        // console.log(obj);
        var profile = `
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
              <img class="img-fluid mb-2" src="${obj.avatar_url}">
              <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
              <span class="badge badge-primary">Public Repos: ${obj.public_repos}</span>
              <span class="badge badge-secondary">Public Gists: ${obj.public_gists}</span>
              <span class="badge badge-success">Followers: ${obj.followers}</span>
              <span class="badge badge-info">Following: ${obj.following}</span>
              <br><br>
              <ul class="list-group">
                  <li class="list-group-item">Company: ${obj.company}</li>
                  <li class="list-group-item">Website/Blog: ${obj.blog}</li>
                  <li class="list-group-item">Location: ${obj.location}</li>
                  <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
            </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
      `
        $('#profile').html(profile)
      },
    })
  })
})
