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

submitBtn.onclick = () => {
    const answer = document.getElementById("answerInput").value;
    alert("You answered: " + answer);
    popup.style.display = "none";
};