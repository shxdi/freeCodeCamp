// Variables

const mainSection = document.getElementById('main-section');
const formSection = document.getElementById('form-section');
const bookmarkListSection = document.getElementById('bookmark-list-section');
const categoryName = document.querySelector('.category-name');
const categoryDropdown = document.getElementById('category-dropdown');
const categoryList = document.getElementById('category-list');
const addBookmarkBtn = document.getElementById('add-bookmark-button');
const closeFormBtn = document.getElementById('close-form-button');
const addBookmarkBtnForm = document.getElementById('add-bookmark-button-form');
const viewCategoryBtn = document.getElementById('view-category-button');
const closeListBtn = document.getElementById('close-list-button');
const deleteBookmarkButton = document.getElementById('delete-bookmark-button');
const nameInput = document.getElementById('name');
const urlInput = document.getElementById('url');

// Functions

const getBookmarks = () => {
  try {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    let isValid = true;

    bookmarks.forEach((bookmark) => {
      let validCheck =
        'name' in bookmark &&
        'category' in bookmark &&
        'url' in bookmark &&
        bookmarks.length > 0;

      if (!validCheck) {
        isValid = false;
      }
    });

    if (isValid) {
      return bookmarks;
    } else {
      return [];
    }
  } catch {
    return [];
  }
};

const displayBookmarks = (category) => {
  const bookmarks = getBookmarks();
  const bookmarksInCategory = [];

  bookmarks.forEach((bookmark) => {
    if (category === bookmark['category']) {
      bookmarksInCategory.push(bookmark);
    }
  });

  categoryList.innerHTML = '';

  if (bookmarksInCategory.length === 0) {
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
  } else if (bookmarksInCategory.length > 0) {
    bookmarksInCategory.forEach((bookmark) => {
      categoryList.innerHTML +=
        `<input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="${category}">` +
        `<label for="${bookmark.name}"><a href="${bookmark.url}">${bookmark.name}</a></label>`;
    });
  }
};

const displayOrCloseForm = () => {
  mainSection.classList.toggle('hidden');
  formSection.classList.toggle('hidden');
};

const displayOrHideCategory = () => {
  mainSection.classList.toggle('hidden');
  bookmarkListSection.classList.toggle('hidden');
};

// Event Listeners

addBookmarkBtn.addEventListener('click', () => {
  categoryName.innerText = categoryDropdown.value;
  displayOrCloseForm();
});

closeFormBtn.addEventListener('click', () => {
  displayOrCloseForm();
});

addBookmarkBtnForm.addEventListener('click', () => {
  const bookmarks = getBookmarks();
  const currentBookmark = {
    name: nameInput.value,
    category: categoryDropdown.value,
    url: urlInput.value,
  };

  bookmarks.push(currentBookmark);

  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  nameInput.value = '';
  urlInput.value = '';

  displayOrCloseForm();
});

viewCategoryBtn.addEventListener('click', () => {
  const currentCategory = categoryDropdown.value;

  categoryName.innerText = categoryDropdown.value;

  displayBookmarks(currentCategory);
  displayOrHideCategory();
});

closeListBtn.addEventListener('click', () => {
  displayOrHideCategory();
});

deleteBookmarkButton.addEventListener('click', () => {
  const itemToDelete = document.querySelector(`input[type='radio']:checked`);
  let itemIndex;
  const bookmarks = getBookmarks();

  if (itemToDelete === null) {
    return;
  }

  bookmarks.forEach((bookmark) => {
    if (
      itemToDelete.id === bookmark.name &&
      itemToDelete.name === bookmark.category
    ) {
      itemIndex = bookmarks.indexOf(bookmark);
    }
  });

  bookmarks.splice(itemIndex, 1);

  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  displayBookmarks(itemToDelete.name);
});
