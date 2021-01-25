const loader = document.querySelector("#loader");
const filter = document.querySelector("#filter");
const postContainer = document.querySelector("#postsContainer");

let limit = 5; // 限制一頁顯示多少個
let page = 1;

// // 第一步先抓 API 資料
async function getPost() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  const data = await res.json();
  return data;
}

// 抓到後要讓資料呈現出來
async function showPost() {
  const posts = await getPost();
  // console.log(posts);
  posts.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
      <div class="number">${post.id}</div>
      <div class="postInfo">
        <h2 class="postTitle">${post.title}</h2>
        <p class="postBody">${post.body}</p>
      </div>
    `;

    postContainer.appendChild(postEl);
  });
}

showPost();
