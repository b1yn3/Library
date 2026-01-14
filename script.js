const popup = document.getElementById("popup");
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const addBook = document.getElementById("saveBook");

const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){

}

openBtn.onclick = () => {
    popup.style.display = "block";
};

closeBtn.onclick = () => {
    popup.style.display = "none";
};

addBook.onclick = () => {
    const newAuthor = document.getElementById("author");
    const newTitle = document.getElementById("title");
    const newPage = document.getElementById("page");
    const newRead = document.getElementById("read");
    const form = document.querySelector(".modal-content")
    const book1 = new Book(newAuthor.value, newTitle.value, newPage.value, newRead.value);
    myLibrary.push(book1);
    console.log(`Book Added: ${book1}`);
    popup.style.display = "none";
    form.reset()
};