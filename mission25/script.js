const musicContainer = document.querySelector('#music-container')
const progressContainer = document.querySelector('#progress-container')
const progress = document.querySelector('#progress')
const audio = document.querySelector('#audio')
const cover = document.querySelector('#cover')
const prev = document.querySelector('#prev')
const play = document.querySelector('#play')
const next = document.querySelector('#next')
const title = document.querySelector('#title')

const songs = ['hey', 'summer', 'ukulele']

let songsIndex = 2

loadSong(songs[songsIndex])

function loadSong(song) {
	title.innerText = song
	audio.src= `music/${song}.mp3` 
	cover.src= `images/${song}.jpg` 
}