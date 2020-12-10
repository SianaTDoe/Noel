let submit1 = document.getElementById("submit1");
let result1 = document.getElementById("result1");

submit1.addEventListener("click", (e) => {
    e.preventDefault();

    result1.textContent =("Salut toi")

});




let submit25 = document.getElementById("submit25");
let result25= document.getElementById("result25");

submit25.addEventListener("click", (e) => {
    e.preventDefault();

    result25.innerHTML =(`Noël Joyeux ! <video src= https://www.youtube.com/watch?v=g-OF7KGyDis width="375" height="280" controls></video>`)

});