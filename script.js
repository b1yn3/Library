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

}

showDialog.addEventListener('click', () => {
    confirmDialog.showModal();
});

cancelButton.addEventListener('click', () => {
    dialogForm.reset();
    confirmDialog.close();
});