const bookCollection = {
  2548: {
    title: 'A book title',
    author: 'An author name',
    topics: ['a topic', 'another topic'],
  },
  2468: {
    title: 'A different book title',
    author: 'A different author name',
    topics: ['a new topic', 'another new topic'],
  },
  1245: {
    author: 'A name of an author',
    topics: [],
  },
  5439: {
    title: 'A title of a book',
  },
};

function updateCollection(collection, id, prop, value) {
  if (value === '') {
    delete collection[id][prop];
  }

  if (prop !== 'topics' && value !== '') {
    collection[id][prop] = value;
  }

  if (
    prop === 'topics' &&
    value !== '' &&
    !collection[id].hasOwnProperty(prop)
  ) {
    collection[id][prop] = [];
  }

  if (prop === 'topics' && value !== '') {
    collection[id][prop].push(value);
  }

  return collection;
}
