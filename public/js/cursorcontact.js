const cursor = document.getElementById('cursor-inner');
document.addEventListener('mousemove', (e)=>{
    let cursorY = e.clientY;
    let cursorX = e.clientX;
    cursor.setAttribute('style', 'transform: translate(' + cursorX + 'px, ' + cursorY + 'px)');
})

document.addEventListener('click', ()=>{
    cursor.classList.add('cursorClickInner');
    document.documentElement.style.setProperty('--coloration-pulsate', "orange");
    setTimeout(() => {
        cursor.classList.remove('cursorClickInner');
    }, 1000);
    setTimeout(() => {
        document.documentElement.style.setProperty('--coloration-pulsate', "teal");
    }, 500);
})

const link = document.getElementsByClassName('link');
const btn = document.querySelector('.btn-return');

for(let l of link){
    l.addEventListener('mouseenter', hoverEnter);
    l.addEventListener('mouseout', hoverOut);
}

btn.addEventListener('mouseenter', hoverEnter);
btn.addEventListener('mouseout', hoverOut);

function hoverEnter(){
    document.documentElement.style.setProperty('--animation-direction', "reverse");
}
function hoverOut(){
    document.documentElement.style.setProperty('--animation-direction', "normal");
}
