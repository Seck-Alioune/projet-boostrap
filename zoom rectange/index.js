const square = document.querySelector('.square');

const button = document.querySelector('.set-square');
button.addEventListener('click', function(){
    const style = window.getComputedStyle(square);
    const height = parseInt(style.getPropertyValue('height')) + 10; 
    
    if (height <= 300) square.style.setProperty('height', `${height}px`);

    else square.style.setProperty('height', '100px');
});

function b2() {
    var tbr = document.getElementById("btn");
    tbr.style.backgroundColor="darkgreen"; 
}

function b3() {
    var trb = document.getElementById("btn");
    trb.style.backgroundColor="blue";
 
}

function b4() {
    var rtb = document.getElementById("btn");
    rtb.style.visibility='hidden';   
}
function b5() {
    var tbr = document.getElementById("btn");
    tbr.style.visibility='visible';
}

