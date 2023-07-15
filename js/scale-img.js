const controlValueImg = document.querySelector('.scale__control--value');
const buttonBigger = document.querySelector('.scale__control--bigger');
const buttonSmaller = document.querySelector('.scale__control--smaller ');
const image = document.querySelector('.img-upload__preview img');

let currentScale = 1;

const zoomOut = () => {
  if (currentScale > 0.25) { // Проверка на минимальный масштаб 25%
    currentScale -= 0.25;
    image.style.transform = `scale(${currentScale})`;
    controlValueImg.value = currentScale * 100;
  }
};
const zoomIn = () => {
  if (currentScale < 1) { // Проверка на максимальный масштаб 100%
    currentScale += 0.25;
    image.style.transform = `scale(${currentScale})`;
    controlValueImg.value = currentScale * 100;
  }
};

buttonBigger.addEventListener('click', () => {
  zoomIn();
});

buttonSmaller.addEventListener('click', () => {
  zoomOut();
});
