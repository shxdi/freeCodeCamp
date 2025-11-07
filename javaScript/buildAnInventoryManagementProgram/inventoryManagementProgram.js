let inventory = [];

function findProductIndex(product) {
  product = product.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === product) {
      return i;
    }
  }

  return -1;
}

function addProduct(product) {
  product.name = product.name.toLowerCase();
  let index = findProductIndex(product.name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${product.name} quantity updated`);
  } else {
    inventory.push(product);
    console.log(`${product.name} added to inventory`);
  }
}

function removeProduct(product, amount) {
  product = product.toLowerCase();
  let index = findProductIndex(product);

  if (index === -1) {
    console.log(`${product} not found`);
    return;
  } else if (inventory[index].quantity < amount) {
    console.log(
      `Not enough ${product} available, remaining pieces: ${inventory[index].quantity}`
    );
  } else {
    inventory[index].quantity -= amount;
    console.log(`Remaining ${product} pieces: ${inventory[index].quantity}`);
  }

  if (inventory[index].quantity === 0) {
    inventory.splice(index, 1);
  }
}
