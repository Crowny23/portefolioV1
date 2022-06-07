// -------Déplacement du cursor---------

const cursor = document.getElementById('cursor-inner');
document.addEventListener('mousemove', (e)=>{
    let cursorY = e.clientY;
    let cursorX = e.clientX;
    cursor.setAttribute('style', 'transform: translate(' + cursorX + 'px, ' + cursorY + 'px)');
})
const cursorOuter = document.getElementById('cursor-outer');
document.addEventListener('mousemove', (e)=>{
    let cursorY = e.clientY - 31;
    let cursorX = e.clientX - 31;
    cursorOuter.setAttribute('style', 'transform: translate3d(' + cursorX + 'px, ' + cursorY + 'px, 0px)');
})
document.addEventListener('click', ()=>{
    cursor.classList.add('cursorClickInner');
    cursorOuter.classList.add('cursorClickOuter');
    document.documentElement.style.setProperty('--coloration-pulsate', "orange");
    setTimeout(() => {
        cursorOuter.classList.remove('cursorClickOuter');
        cursor.classList.remove('cursorClickInner');
    }, 1000);
    setTimeout(() => {
        document.documentElement.style.setProperty('--coloration-pulsate', "teal");
    }, 500);
})

// ----------Event du cursor-------------

const title = document.querySelector('.title');
const btnContact = document.getElementsByClassName('btn-contact');
const ppimg = document.querySelector('.ppimg');
const ppicon = document.querySelector('.ppicon');
const animationScroll = document.getElementsByClassName('animationScroll');

title.addEventListener('mouseenter', hoverEnter);
title.addEventListener('mouseout', hoverOut);
for(let btn of btnContact){
    btn.addEventListener('mouseenter', hoverEnter);
    btn.addEventListener('mouseout', hoverOut);
}
ppimg.addEventListener('mouseenter', hoverEnter);
ppimg.addEventListener('mouseout', hoverOut);
ppicon.addEventListener('mouseenter', hoverEnter);
ppicon.addEventListener('mouseout', hoverOut);

for (let i = 0; i < animationScroll.length; i++) {
    animationScroll[i].addEventListener('mouseenter', hoverEnter);
    animationScroll[i].addEventListener('mouseout', hoverOut);
}

for(let img of imgproj){
    img.addEventListener('mouseenter', hoverEnter);
    img.addEventListener('mouseout', hoverOut);
}

function hoverEnter(){
    document.documentElement.style.setProperty('--animation-direction', "reverse");
}
function hoverOut(){
    document.documentElement.style.setProperty('--animation-direction', "normal");
}
