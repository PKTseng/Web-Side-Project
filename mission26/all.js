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

showPost();

// 監聽 scroll 事件 (scrollTop 、scrollHeight、 clientHight、documentElement)
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});
