const seedArr = [
  {
    category: 'vegetable',
    type: 'Carrot',
    typeClass: 'carrot',
    name: 'Purple Dragon',
  },
  {
    category: 'vegetable',
    type: 'Pepper',
    typeClass: 'pepper',
    name: 'Sweet Moruga',
  },
  {
    category: 'vegetable',
    type: 'Lettuce',
    typeClass: 'lettuce',
    name: 'Spotted Aleppo Syrian',
  },
  { category: 'vegetable', type: 'Tomato', typeClass: 'tomato', name: 'Spoon' },
  {
    category: 'flower',
    type: 'Cosmos',
    typeClass: 'cosmos',
    name: 'Apricot Lemonade',
  },
  {
    category: 'flower',
    type: 'Marigold',
    typeClass: 'marigold',
    name: 'Orange Flame',
  },
  {
    category: 'flower',
    type: 'Sunflower',
    typeClass: 'sunflower',
    name: 'Lemon Queen',
  },
  {
    category: 'herb',
    type: 'Catmint',
    typeClass: 'catmint',
    name: 'Grandview',
  },
  { category: 'herb', type: 'Bee Balm', typeClass: 'bee-balm', name: 'Lemon' },
  { category: 'herb', type: 'Basil', typeClass: 'basil', name: 'Persian' },
];

const selectContainer = document.querySelector('select');
const productsContainer = document.querySelector('.products-container');

function seedCards(seedCategory) {
  let seeds;

  if (seedCategory === 'all') {
    seeds = seedArr;
  } else {
    seeds = seedArr.filter((seedObj) => {
      if (seedObj.category === seedCategory) {
        return seedObj;
      }
    });
  }

  return seeds.map((seedObj) => {
    let type = seedObj.type;
    let typeClass = seedObj.typeClass;
    let name = seedObj.name;

    return `
    <div class='card ${typeClass}'>
        <h2>${type}</h2>
        <p>${name}</p>
    </div>    
    `;
  });
}

selectContainer.addEventListener('change', () => {
  productsContainer.innerHTML = seedCards(selectContainer.value).join('');
});
