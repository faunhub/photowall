const hoverSound = document.getElementById('hover-sound');
const hoverSoundButton = document.getElementById('hover-sound-button');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    // Reset sound to start (so it can play rapidly if moving mouse fast)
    hoverSound.currentTime = 0; 
    hoverSound.play();
  });
});

document.querySelectorAll('.folder-button-link').forEach(item => {
  item.addEventListener('mouseenter', () => {
    hoverSoundButton.currentTime = 0; 
    hoverSoundButton.play();
  });
});