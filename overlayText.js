const textOverlay = document.getElementById('text-overlay');
const closeX = document.querySelector('.close-text');

// This replaces your previous overlay logic
document.querySelectorAll('.text-trigger').forEach(img => {
  img.onclick = () => {
    const overlay = document.getElementById('text-overlay');
    const modalBody = document.getElementById('modal-body');

    // 1. Get the data from THIS specific image
    const content = img.getAttribute('data-content');

    // 2. Inject it into the modal
    modalBody.innerText = content;
    // 3. Reveal the overlay
    overlay.style.display = 'flex';
  };
});

// 1. When the X is pressed, hide the modal
closeX.onclick = () => {
  textOverlay.style.display = 'none';
};

// 2. Pro-UX Logic: Also close if they click the dark area outside the box
textOverlay.onclick = (event) => {
  if (event.target === textOverlay) {
    textOverlay.style.display = 'none';
  }
};