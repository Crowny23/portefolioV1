
const scrollez = document.querySelector('.scroll');
const scrollezChild = scrollez.childNodes
scrollezChild.forEach(span => {
    span.className = 'animationScroll';
});
const welcome = document.getElementById('welcomes');
const welcomeChild = welcome.children;
const hey = document.querySelector('.hey');
const titleSkill = document.querySelector('.titleSkill');
const skilllike = document.querySelector('.skilllike');
const titleSkillLike = document.querySelector('.titleSkillLike');
const lineorange = document.querySelector('.lineorange');
const lineblue = document.querySelector('.lineblue');
const devorange = document.getElementsByClassName('devorange');
const devblue = document.getElementsByClassName('devblue');
const myPro = document.querySelector('.myproj');
const titlePro = document.querySelector('.titlePro');
const allproj = document.querySelector('.allproj');
const titleProj = document.getElementsByClassName('titleProj');
const imgproj = document.getElementsByClassName('imgproj');

scrollez.addEventListener('click', ()=>{
    for (const child of welcomeChild) {
        child.classList.remove('hide');
        animateClear();
    }
    scrollez.classList.add('active');
})
for(let dev of devorange){
    dev.style.top = innerHeight + Math.random() * innerHeight * 2 + 'px';
    dev.style.left = 10 + Math.random() * 90 + '%';
}
for(let dev of devblue){
    dev.style.top = innerHeight + Math.random() * innerHeight * 2 + 'px';
    dev.style.right = 10 + Math.random() * 90 + '%';
}
window.addEventListener('scroll', (e)=>{
    if(scrollez.className == 'scroll'){
        this.scrollTo(0,0);
    }
    if(this.scrollY > 400){
        hey.classList.add('leftToRight');
        titleSkill.classList.add('topTitle');
        titleSkillLike.classList.add('topTitle2');
        skilllike.classList.add('skillLikeRight');
        messageLabel.classList.add('opacityToOpact');
        setTimeout(() => {
            timer = setInterval("textFunc()", 150);
        }, 4200);
        lineorange.style.transform = 'translateY('+ Math.ceil(this.scrollY * 0.4 - 400) + 'px)';
        lineblue.style.transform = 'translateY('+ Math.ceil(this.scrollY * 0.4 - 400) +'px)';
        for(let dev of devorange){
            dev.style.transform = 'translateY('+ Math.ceil(this.scrollY * 0.55 - 400) + 'px)';
        }
        for(let dev of devblue){
            dev.style.transform = 'translateY('+ Math.ceil(this.scrollY * 0.45 - 400) + 'px)';
        }
    }
    if(this.scrollY > 1200){
        myPro.classList.add('myProjToBottom');
        titlePro.classList.add('topTitle4');
        allproj.classList.add('alignstart');
        for(let title of titleProj){
            title.classList.add('topTitle3');
        }
        for(let img of imgproj){
            img.classList.add('topImg');
        }
        msgLabel.classList.add('opacityToOpact1');
        setTimeout(() => {            
            timer1 = setInterval("textFunc1()", 150);
        }, 1500);
    }
})

const skill = document.querySelector('.skills');
skill.style.top = innerHeight;