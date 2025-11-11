const availableNums = document.querySelector('.available-nums');
const numContainers = document.querySelectorAll('.available-nums div');

let selectedNum;

availableNums.addEventListener('click', (event) => {
  selectNum(event);
});

function selectNum(event) {
  selectedNum = event.target.textContent;

  numContainers.forEach((element) => {
    if (element.classList.contains('selected')) {
      element.removeAttribute('class');
    }
  });

  event.target.classList.add('selected');
}
