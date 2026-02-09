const myLibrary = [];

const showDialog = document.getElementById('showDialog');
const confirmDialog = document.getElementById('confirmDialog');
const dialogForm = document.getElementById('dialogForm');
const cancelButton = document.getElementById('cancel-button');

function Book(title, author, pages, read, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToHTML(titleInput, authorInput, pageInput, selectInput, uuid){
    const article = document.createElement('article');
    article.id = uuid;

    const div = document.createElement('div');
    div.classList.add('delete');
    const button = document.createElement('button');
    const img = document.createElement('img');
    img.src = 'icon/image.png';
    button.appendChild(img);
    div.appendChild(button);

    const h4 = document.createElement('h4');
    h4.classList.add('bookTitle');
    h4.textContent = titleInput;
    const pAuthor = document.createElement('p');
    pAuthor.classList.add('bookAuthor');
    pAuthor.textContent = authorInput;

    const pPage = document.createElement('p');
    pPage.classList.add('bookPages');
    pPage.textContent = pageInput;

    const pSelect = document.createElement('p');
    pSelect.classList.add('bookRead');
    pSelect.textContent = selectInput;

    article.append(div, h4, pAuthor, pPage, pSelect);

    const main = document.querySelector('main');
    main.appendChild(article);
}

showDialog.addEventListener('click', () => {
    confirmDialog.showModal();
});

cancelButton.addEventListener('click', () => {
    dialogForm.reset();
    confirmDialog.close();
});

dialogForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const titleInput = document.getElementById("titleInput");
    const authorInput = document.getElementById("authorInput");
    const pageInput = document.getElementById("pageInput");
    const selectInput = document.getElementById("selectInput");
    const uuid = crypto.randomUUID();
    console.log(`Title: ${titleInput.value}, ${authorInput.value} ${pageInput.value} ${selectInput.value} ${uuid}`);

    myLibrary.push(new Book(titleInput.value, authorInput.value, pageInput.value, selectInput.value, uuid));
    addBookToHTML(titleInput.value, authorInput.value, pageInput.value, selectInput.value, uuid);
    console.log(myLibrary);
    dialogForm.reset();
});