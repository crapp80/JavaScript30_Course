/* Get our Elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.toggleFullscreen');

/* Build out Functions */

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  console.log(this.dataset.skip); // '-10' or '25'
  video.currentTime += parseFloat(this.dataset.skip); // this.dataset.skip is a string -> parseFloat returns a floating point number
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  console.log(this.value);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleFullscreen() {
  const requestFullScreen = video.requestFullscreen || video.msRequestFullscreen || video.mozRequestFullScreen || video.webkitRequestFullscreen;
  requestFullScreen.call(video);
}


/* Hook up the event listeners */

video.addEventListener('click', togglePlay);
document.addEventListener('keydown', (e) => e.keyCode == 32 ? togglePlay() : false); // space bar to play/pause the video
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); // is only executed if mousedown = true
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
fullscreen.addEventListener('click', handleFullscreen);
