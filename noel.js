let submit1 = document.getElementById("submit1");
let result1 = document.getElementById("result1");

submit1.addEventListener("click", (e) => {
    e.preventDefault();

    result1.innerHTML ="<img src= img_noel/jour1.gif>"

});


let submit2 = document.getElementById("submit2");
let result2 = document.getElementById("result2");

submit2.addEventListener("click", (e) => {
    e.preventDefault();

    result2.innerHTML ="<img src= img_noel/jour2.png>"

});










let submit25 = document.getElementById("submit25");
let result25= document.getElementById("result25");

submit25.addEventListener("click", (e) => {
    e.preventDefault();

    result25.innerHTML =(`<video src= img_noel/jour25.mp4 width="500" height="280" controls></video>`)

});