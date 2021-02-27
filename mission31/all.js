$(document).ready(function () {
  $('#searchUser').on('keyup', function (e) {
    let username = e.target.value
    $.ajax({
      url: 'https://api.github.com/users/' + username,
      data: {
        client_id: 'b9315bcd5a07fcd759d8',
        client_secret: 'a2b698bf7e7c02f898197cf136d1a41f704ca8e4',
      },
    }).done(function (user) {
      $.ajax({
        url: 'https://api.github.com/users/' + username + '/repos',
        data: {
          client_id: 'b9315bcd5a07fcd759d8',
          client_secret: 'a2b698bf7e7c02f898197cf136d1a41f704ca8e4',
          sort: 'created: asc',
          per_page: 5,
        },
      }).done(function (repos) {
        $.each(repos, function (index, repo) {
          $('#repos').append(`
          <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                  <a href='${repo.html_url}' target='_blank' class='font-weight-bold'>${repo.name}</a>
                </div>
                <div class="col-md-6">
                  <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                  <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                  <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                </div>
            </div>
          </div>
          `)
        })
      })
      $('#profile').html(`
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
              <img class="img-fluid mb-2" src="${user.avatar_url}">
              <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
              <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
              <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
              <span class="badge badge-success">Followers: ${user.followers}</span>
              <span class="badge badge-info">Following: ${user.following}</span>
              <br><br>
              <ul class="list-group">
                  <li class="list-group-item">Company: ${user.company}</li>
                  <li class="list-group-item">Website/Blog: ${user.blog}</li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
            </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
      `)
    })
  })
})
