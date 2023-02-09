//Inject current year into footer
const correctYear = new Date();
document.querySelector('#year').textContent = correctYear.getFullYear();

function menuToggle(){
document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgMenu");

x.onclick = menuToggle;