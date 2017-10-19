# Custom HTML5 Video Player

## Things to remember:

**Toggle Fullscreen:**
```javascript
const fullscreen = player.querySelector('.toggleFullscreen');

function handleFullscreen() {
  const requestFullScreen = video.requestFullscreen || video.msRequestFullscreen || video.mozRequestFullScreen || video.webkitRequestFullscreen;
  requestFullScreen.call(video);
}

fullscreen.addEventListener('click', handleFullscreen);
```

**Space Bar to Play/Pause Video:**
```javascript
document.addEventListener('keydown', (e) => e.keyCode == 32 ? togglePlay() : false);
```

See it in action [here](https://crapp80.github.io/JavaScript30_Course/11_Custom_HTML5_Video_Player/index.html)
