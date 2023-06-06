const form = document.getElementById('meme-form');
const memeContainer = document.getElementById('meme-container');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const file = document.getElementById('meme-file').files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    const image = new Image();
    image.src = reader.result;

    memeContainer.innerHTML = '';
    memeContainer.appendChild(image);
  });

  if (file) {
    reader.readAsDataURL(file);
  }
});

