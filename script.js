let bgcolorchange = document.getElementById('bgg');
window.addEventListener('scroll', function()
{
let scrollPosition = window.scrollY;
let colorChangeThreshold = 10;

if (scrollPosition > colorChangeThreshold) {
bgcolorchange.style.backgroundColor = '#011527';
} else {
bgcolorchange.style.backgroundColor = "#222d37"; 
}
});