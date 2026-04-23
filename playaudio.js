const btn = document.getElementById('music');
const audio = document.getElementById('bg-music');

btn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

