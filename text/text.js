var text1;
function transform() {
var past=document.getElementById('text1');
past.style.backgroundColore = "red";
past.style.fontSize = "50px";
past.style.color = "white";
past.style.fontFamily = "Mistral";


}
const pop=document.getElementById('boite');
window.addEventListener('scroll',() => {
if (window.scrollY>30) {
    pop.classList.add("scroll");
}else{
    pop.classList.remove("scroll");
}
})