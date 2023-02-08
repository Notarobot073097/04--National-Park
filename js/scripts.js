//Inject current year into footer
const correctYear = new Date();
document.querySelector('#year').textContent = correctYear.getFullYear();