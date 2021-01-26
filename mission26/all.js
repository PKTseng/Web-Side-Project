// 1. 先抓 DOM
// 2. 用 fetch 打API
// 3. 監聽卷軸滑動時打API，同時顯示小點點
// 4. 輸入 filter input 時顯示相對資訊

const filter = document.querySelector("#filter");
const postContainer = document.querySelector("#postsContainer");
const loading = document.querySelector("#loader");

let limit = 4; // 限制一頁顯示多少個
let page = 1;

// 第一步先抓 API 資料
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
    const postEl = document.createElement("div"); //新增 div 標籤
    postEl.classList.add("post"); // div 標籤名為 post
    postEl.innerHTML = `
      <div class="number">${post.id}</div>
      <div class="postInfo">
        <h2 class="postTitle">${post.title}</h2>
        <p class="postBody">${post.body}</p>
      </div>
    `;

    // 將這些 div 輸入到 postContainer 裡面
    postContainer.appendChild(postEl);
  });
}

// 當滑到最下面時顯示小點點
function showLoading() {
  loading.classList.add("show"); // 顯示小點CSS

  // 移除小點時機
  setTimeout(() => {
    loading.classList.remove("show"); // 1秒後，移除小點CSS

    // 增加頁面同時，0.3秒內打 API 抓新資料
    setTimeout(() => {
      page++;
      showPost();
    }, 300);
  }, 1000);
}

// 輸入 filter input 時顯示相對資訊
function filterPost(e) {
  // console.log(e.target.value);
  const term = e.target.value.toUpperCase();
  const posts = document.querySelectorAll(".post");

  posts.forEach((post) => {
    const title = post.querySelector(".postTitle").innerText.toUpperCase();
    const body = post.querySelector(".postBody").innerText.toUpperCase();

    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = "flex";
    } else {
      post.style.display = "none";
    }
  });
}

showPost();

// 監聽 scroll 事件 (scrollTop 、scrollHeight、 clientHight、documentElement)
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});

filter.addEventListener("input", filterPost);
