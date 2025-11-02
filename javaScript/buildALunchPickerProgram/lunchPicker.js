let lunches = [];

function addLunchToEnd(array, item) {
  array.push(item);
  console.log(`${item} added to the end of the lunch menu.`);

  return array;
}

function addLunchToStart(array, item) {
  array.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);

  return array;
}

function removeLastLunch(array) {
  if (array[0] !== undefined) {
    let removedItem = array.pop();
    console.log(`${removedItem} removed from the end of the 
lunch menu.`);
  } else {
    console.log('No lunches to remove.');
  }

  return array;
}

function removeFirstLunch(array) {
  if (array[0] !== undefined) {
    let removedItem = array.shift();
    console.log(`${removedItem} removed from the start of the 
lunch menu.`);
  } else {
    console.log('No lunches to remove.');
  }

  return array;
}

function getNthLunch(array, num) {
  let nth = array[num];

  if (nth !== undefined) {
    console.log(`Your selected lunch: ${nth}`);
  } else {
    console.log('The lunch you selected is not available.');
  }
}

function showLunchMenu(array) {
  if (array[0] !== undefined) {
    let lunchMenu = 'Menu items: ';

    for (let i = 0; i < array.length; i++) {
      lunchMenu += array[i] + ', ';
    }

    lunchMenu = lunchMenu.slice(0, -2) + '.';

    console.log(lunchMenu);
  } else {
    console.log('The menu is empty.');
  }
}
