const books = [
  {
    title: 'Book 1',
    authorName: 'Author 1',
    releaseYear: 2014,
  },
  {
    title: 'Book 2',
    authorName: 'Author 2',
    releaseYear: 1932,
  },
  {
    title: 'Book 3',
    authorName: 'Author 1',
    releaseYear: 1992,
  },
];

function sortByYear(first, second) {
  if (first.releaseYear < second.releaseYear) {
    return -1;
  } else if (first.releaseYear > second.releaseYear) {
    return 1;
  } else if (first.releaseYear === second.releaseYear) {
    return 0;
  }
}

let filteredBooks = books.filter((book) => book.releaseYear > 1950);

filteredBooks.sort(sortByYear);
