const myLibrary = [];

const showDialog = document.getElementById('showDialog');
const confirmDialog = document.getElementById('confirmDialog');

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