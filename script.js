const bookBtn = document.getElementById('bookBtn');
const bookContainer = document.getElementById('gridContainer');
const formModal = document.getElementById('formModal');
const addBookForm = document.getElementById('addBookForm');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const pagesInput = document.getElementById('pagesInput');
const readStatus = document.getElementById('readStatus');
const submitBtn = document.getElementById('submitBtn');
const modalBackdrop = document.querySelector('.modal-backdrop');

const titleValue = titleInput.value;
const authorValue = authorInput.value;
const pagesValue = pagesInput.value;

let library = [];

readStatus.checked = false;

bookBtn.addEventListener('click', function() {
    formModal.showModal();
});

class Book {
    constructor(
        title = 'undefined',
        author = 'undefined',
        pages = '0',
        read = false
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
};

const bookFromInput = () => {
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readStatus.checked;
    library.push(new Book(title, author, pages, read));
};

submitBtn.addEventListener('click', function() {
    addBookForm.reset();
    bookFromInput();
    console.log(library);
});

function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookContainer.appendChild(bookCard);

    const bookTitle = document.createElement('h3');
    bookTitle.className = 'book-title';
    bookTitle.textContent = book.title;
    bookCard.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.className = 'book-author';
    bookAuthor.textContent = book.author;
    bookCard.appendChild(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.className = 'book-pages';
    bookPages.textContent = `${book.pages} pages`;
    bookCard.appendChild(bookPages);

    const bookReadStatus = document.createElement('p');
    let status = 'Been read: ';
    if(book.read) {
        status += 'yes';
    } else {
        status += 'no';
    };
    bookReadStatus.textContent = status;
    bookCard.appendChild(bookReadStatus)
    
};





    


