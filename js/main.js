let bar = document.getElementById("bar");
let navbar =document.getElementById("navbar");
bar.addEventListener("click", function(){
    navbar.classList.toggle("right-hiden");
    navbar.classList.toggle("start-0");
})