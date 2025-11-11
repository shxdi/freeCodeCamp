// Fill board with given numbers
const startingGrid = [
  ['', '4', '6', '', '', '8', '', '', ''],
  ['', '5', '', '', '9', '6', '', '', '4'],
  ['8', '2', '3', '7', '', '4', '', '', ''],
  ['3', '5', '', '', '6', '', '', '', '7'],
  ['', '7', '2', '', '', '1', '', '', '9'],
  ['', '4', '', '', '', '', '', '', '1'],
  ['', '9', '', '8', '', '', '7', '3', '4'],
  ['4', '', '5', '', '', '', '9', '2', '8'],
  ['', '8', '7', '4', '', '2', '5', '', '6'],
];
const grid = document.querySelectorAll('.sub-grid');

let currentGrid = 0;
let currentSubGrid = 0;

grid.forEach((gridElement) => {
  let children = gridElement.childNodes;

  children.forEach((subGridElement) => {
    if (subGridElement.nodeName === 'DIV') {
      subGridElement.textContent = startingGrid[currentGrid][currentSubGrid];

      currentSubGrid++;
    }
  });

  currentSubGrid = 0;
  currentGrid++;
});

currentGrid = 0;

// Selecting number

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
