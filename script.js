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

function addBookToLibrary(){
    Book(titleInput.value, authorInput.value, ageInput.value, selectInput.value, );
}

showDialog.addEventListener('click', () => {
    confirmDialog.showModal();
});

cancelButton.addEventListener('click', () => {
    dialogForm.reset();
    confirmDialog.close();
});

dialogForm.addEventListener("submit", function(e) {
    const titleInput = document.getElementById("titleInput");
    const authorInput = document.getElementById("authorInput");
    const pageInput = document.getElementById("pageInput");
    const selectInput = document.getElementById("selectInput");
    const uuid = crypto.randomUUID();
    console.log(`Title: ${titleInput.value}, ${authorInput.value} ${pageInput.value} ${selectInput.value} ${uuid}`);

    myLibrary.push(new Book(titleInput.value, authorInput.value, pageInput.value, selectInput.value, uuid));
    console.log(myLibrary);

});