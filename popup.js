const popup = document.getElementById("popup");
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const submitBtn = document.getElementById("submitAnswer");

openBtn.onclick = () => {
    popup.style.display = "block";
};

closeBtn.onclick = () => {
    popup.style.display = "none";
};
