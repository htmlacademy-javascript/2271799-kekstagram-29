const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('#upload-file');
const previewContainer = document.querySelector('.img-upload__preview-container');
const previewImage = previewContainer.querySelector('img');
const overlayForm = document.querySelector('.img-upload__overlay');
fileChooser.addEventListener('change', () => {
  overlayForm.classList.remove('hidden');
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  previewImage.src = URL.createObjectURL(file);
  if (matches) {
    previewImage.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
  }
});
