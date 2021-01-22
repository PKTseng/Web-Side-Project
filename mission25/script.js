const musicContainer = document.querySelector("#music-container");
const progressContainer = document.querySelector("#progress-container");
const progress = document.querySelector("#progress");
const audio = document.querySelector("#audio");
const cover = document.querySelector("#cover");
const PrevBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");
const title = document.querySelector("#title");

const songs = ["hey", "summer", "ukulele"];

let songsIndex = 2;

loadSong(songs[songsIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}

function preSong() {
  songsIndex--;

  if (songsIndex < 0) {
    songsIndex = songs.length - 1;
  }

  playSong();
}

function nextSong() {
  songsIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  playSong();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// change song
PrevBtn.addEventListener("click", preSong);
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);

progressContainer.addEventListener("click", setProgress);
